import React from "react";
import { sendOtp } from "../../services/auth";

function SendOtpForm({ setStep, setMobile, mobile }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) return;
    const { response, error } = await sendOtp(mobile);
    console.log({ response, error });
    if (response) setStep(2);
    if (error) console.log(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler} className="">
      <p className="">ورود به حساب کاربری</p>
      <span className="">
        برای استفاده کردن از دیوار لطفا شماره موبایل خود را وارد کنید. کد تایید
        به این شماره ارسال خواهد شد
      </span>
      <label className="text-xl " htmlFor="input">
        شماره موبایل خود را وارد بکنید
      </label>
      <input
        type="text"
        className=""
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit" className="">
        ارسال کد تایید
      </button>
    </form>
  );
}

export default SendOtpForm;
