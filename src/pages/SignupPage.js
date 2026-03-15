import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import api from "../services/api";

function SignupPage(){

 const { register, handleSubmit, watch, setValue, formState:{errors} } = useForm();

 const [roles,setRoles] = useState([]);
 const [loading,setLoading] = useState(false);
 const [storeRoleId,setStoreRoleId] = useState(null);
 const [customerRoleId,setCustomerRoleId] = useState(null);

 const history = useHistory();

 const selectedRole = watch("role_id");
 const password = watch("password");

 useEffect(()=>{

  api.get("/roles")
  .then(res=>{

   console.log("ROLES FROM API:", res.data);

   setRoles(res.data);

   // Customer default seçimi
   const customer = res.data.find(r => r.code.toLowerCase() === "customer");

   // Store id
   const store = res.data.find(r => r.code.toLowerCase() === "store");

   if(customer){
    setCustomerRoleId(customer.id);
    setValue("role_id", customer.id);
   }

   if(store){
    setStoreRoleId(store.id);
   }

  })
  .catch(err=>console.log(err));

 },[setValue]);

 const onSubmit = (data)=>{
  setLoading(true);
  api.post("/signup",data)
  .then(()=>{
   alert("You need to click link in email to activate your account!");
   history.goBack();
  })
  .catch(()=>{
   alert("Signup failed");
  })
  .finally(()=>{
   setLoading(false);
  });
 };

 return React.createElement(

  "div",
  { className:"flex justify-center mt-10" },

  React.createElement(

   "form",
   {
    onSubmit: handleSubmit(onSubmit),
    className:"flex flex-col gap-4 w-96 p-6 border rounded-lg"
   },

   React.createElement("h2",{className:"text-xl font-bold text-center"},"Sign Up"),

   // Name
   React.createElement("input",{
    placeholder:"Name",
    ...register("name",{ required:"Name is required", minLength:{value:3,message:"Minimum 3 characters"} })
   }),
   errors.name && React.createElement("p",null,errors.name.message),

   // Email
   React.createElement("input",{
    placeholder:"Email",
    ...register("email",{ required:"Email required", pattern:{value:/^\S+@\S+$/i,message:"Invalid email"} })
   }),
   errors.email && React.createElement("p",null,errors.email.message),

   // Password
   React.createElement("input",{
    type:"password",
    placeholder:"Password",
    ...register("password",{ required:"Password required", pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/, message:"Weak password"} })
   }),
   errors.password && React.createElement("p",null,errors.password.message),

   // Confirm Password
   React.createElement("input",{
    type:"password",
    placeholder:"Confirm Password",
    ...register("password2",{ validate:value => value===password || "Passwords do not match" })
   }),
   errors.password2 && React.createElement("p",null,errors.password2.message),

   // Role Select
   React.createElement(
    "select",
    {
     defaultValue: customerRoleId || "",
     ...register("role_id",{ valueAsNumber:true })
    },
    roles.map(role =>
     React.createElement("option",{ key:role.id, value:role.id }, role.name)
    )
   ),

   // Store Fields (Mağaza)
   Number(selectedRole) === storeRoleId && React.createElement(
    React.Fragment,
    null,

    React.createElement("input",{
     placeholder:"Store Name",
     ...register("store.name",{ required:"Store name required", minLength:{value:3,message:"Minimum 3 characters"} })
    }),
    errors?.store?.name && React.createElement("p",null,errors.store.name.message),

    React.createElement("input",{
     placeholder:"Store Phone",
     ...register("store.phone",{ required:"Phone required", pattern:{value:/^(\+90|0)?5\d{9}$/, message:"Invalid phone"} })
    }),
    errors?.store?.phone && React.createElement("p",null,errors.store.phone.message),

    React.createElement("input",{
     placeholder:"Tax ID",
     ...register("store.tax_no",{ required:"Tax ID required", pattern:{value:/^T\d{4}V\d{6}$/, message:"Format TXXXXVXXXXXX"} })
    }),
    errors?.store?.tax_no && React.createElement("p",null,errors.store.tax_no.message),

    React.createElement("input",{
     placeholder:"IBAN",
     ...register("store.bank_account",{ required:"IBAN required", pattern:{value:/^TR\d{24}$/, message:"Invalid IBAN"} })
    }),
    errors?.store?.bank_account && React.createElement("p",null,errors.store.bank_account.message)

   ),

   // Submit Button
   React.createElement(
    "button",
    { type:"submit", disabled:loading, className:"bg-green-700 text-white p-2 rounded" },
    loading ? "Loading..." : "Sign Up"
   )

  )

 );

}

export default SignupPage;