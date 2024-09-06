import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from "antd";

import img from "@/assets/product/home.svg";
import logo from "@/assets/logo.svg";

const Account = ({ dispatch }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const navigateHandler = (path) => {
    navigate(path);
  };

  const error = (text) => {
    messageApi.error(text);
  };
  const success = (text) => {
    messageApi.success(text);
  };

  const saveToken = (data, values) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        expiresInMins: 30,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          error("Something went wrong :(");
          return;
        }

        success("Successfully logged in :)");
        console.log(res);

        dispatch({ type: "SAVE_USER", payload: { ...values, img: res.image } });
        setTimeout(() => {
          localStorage.setItem("userTokent", JSON.stringify(res.token));
          dispatch({ type: "ADD_TOKEN", token: res.token });
          navigateHandler("/");
        }, 500);
      });
  };

  const onFinish = (values) => {
    saveToken(values, values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="wrapper mt-16 border-slate-100">
      <div className="product__info flex items-center text-sm my-4 gap-4">
        <Link to={"/"} className="flex items-center justify-center gap-2">
          <img src={img} className="max-w-4" alt="img of home" />
          <span className="text-[#3BB77E]">Home</span>
        </Link>{" "}
        <span className="text-slate-300">/</span>
        <p className="text-slate-300">Form</p>
      </div>
      <div className="min-h-[77vh] py-2 flex items-center justify-center flex-col">
        <img
          src={logo}
          className="max-w-[11.25rem] mx-auto my-4"
          alt="img of website logo"
        />
        <Form
          name="basic"
          className="w-52 sm:w-64"
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="emilys" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="emilyspass" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-green-500 hover:bg-green-400"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      {contextHolder}
    </section>
  );
};

export default Account;
