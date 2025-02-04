"use client"

import { BASE_API_URL } from "@/global"
import { storeCookie } from "@/lib/ client-cookies"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import { ToastContainer, toast } from "react-toastify"


const LoginPage = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault()
            const url = `${BASE_API_URL}/user/login`
            const payload = JSON.stringify({ email: email, password })
            const { data } = await axios.post(url, payload, {
                headers: { "Content-Type": "application/json" }
            })
            if (data.status == true) {
                toast(data.message, { hideProgressBar: true, containerId: `toastLogin`, type: "success", autoClose: 2000 })
                storeCookie("token", data.token)
                storeCookie("id", data.data.id)
                storeCookie("name", data.data.name)
                storeCookie("role", data.data.role)
                let role  = data.data.role
                if (role === `MANAGER`) setTimeout(() => router.replace(`/manager/dashboard`),1000)
                else if (role === `CASHIER`) setTimeout(() => router.replace(`/cashier/dashboard`), 1000)
            }
            else toast(data.message, { hideProgressBar: true, containerId: `toastLogin`, type: "warning" })
        } catch (error) {
            console.log(error);
            toast(`Something wrong`, { hideProgressBar: true, containerId: `toastLogin`, type: "error" })
        }
    }

    return (
        <div className="w-screen h-screen bg-login bg-cover">
            <ToastContainer containerId={`toastLogin`}/>
            <div className="w-full h-full bg-backdrop-login flex justify-center items-center p-5">
                <div className="w-full md:w-6/12 lg:w-4/12 min-h-[600px] border rounded-xl bg-white p-5 flex flex-col items-center relative">
                    <div className="absolute bottom-0 left-0 w-full py-2 text-center">
                        <small className="text-slate-600">Copyright @2024</small>
                    </div>
                    <Image alt="moklet-app" width={150} height={100} src={`/image/restaurant.png`} className="h-auto my-10"/>
                    <h4 className="text-2xl uppercase font-semibold text-primary mb-4">FOODER</h4>
                    <span className="text-sm text-slate-500 font-medium text-center">
                        Welcome Manager and Cashier
                    </span>

                    
                </div>
            </div>
        </div>
    )
 
    }
export default LoginPage