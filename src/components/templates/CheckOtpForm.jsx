import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "services/auth";
import { setCookie } from "utils/cookie";
import { getProfile } from "../../services/user";

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const { refetch } = useQuery(["profile"], getProfile);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (code.length !== 5) return;
    const { response, error } = await checkOtp(code, mobile);
    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
      console.log(response);
    }
    if (error) console.log(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler} className="">
      <p className="">تایید کد ارسالی</p>
      <span className="">کد پیامک شده به شماره `{mobile}` را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
