"use client"

import { IUser } from "@/app/types"
import { BASE_API_URL } from "@/global"
import { put } from "@/lib/api-bridge"
import { getCookie } from "@/lib/client-cookies"
import { useRouter } from "next/navigation"
import { FormEvent, useRef, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { ButtonPrimary, ButtonDanger, ButtonOutlineDanger } from "@/components/button"
import { InputGroupComponent } from "@/components/InputComponent"
import Modal from "@/components/Modal"
import Select from "@/components/Select"
import FileInput from "@/components/FileInput"
import { CircleX } from "lucide-react"

const EditUser = ({ selectedUser }: { selectedUser: IUser }) => {
    const [isChangingPassword, setIsChangingPassword] = useState<boolean>(false)
    const [isShow, setIsShow] = useState<boolean>(false)
    const [user, setUser] = useState<IUser>({ ...selectedUser })
    const router = useRouter()
    const TOKEN = getCookie("token") || ""
    const [file, setFile] = useState<File | null>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const openModal = () => {
        setUser({ ...selectedUser })
        setIsShow(true)
        if (formRef.current) formRef.current.reset()
    }
    const handleSubmit = async (e: FormEvent)  => {
        try {
            e.preventDefault()
            const url = `${BASE_API_URL}/user/${selectedUser.id}`
            const { name, email, password, role } = user
            const payload = new FormData()
            payload.append("name", name || "")
            payload.append("email", email || "")
            payload.append("role", role || "")
            payload.append("password", password || "")
            if (file !== null) payload.append("picture", file || "")
            const { data } = await put(url, payload, TOKEN)
            if (data?.status) {
                setIsShow(false)
                toast(data?.message, { hideProgressBar: true, containerId: `toastUser`, type: `success` })
                setTimeout(() => router.refresh(), 1000)
            } else {
                toast(data?.message, { hideProgressBar: true, containerId: `toastUser`, type: `warning` })
            }
        } catch (error) {
            console.log(error);
            toast(`Something Wrong`, { hideProgressBar: true, containerId: `toastUser`, type: `error` })
        }
    }
    return (
        <div>
            <ToastContainer containerId={`toastUser`}/>
            <ButtonPrimary type="button" onClick={() => openModal()} className="bg-[#F45846] text-white text-base font-semibold py-3 px-8 rounded-md hover:shadow-lg">
                Edit
            </ButtonPrimary>
            <Modal isShow={isShow} onClose={state => setIsShow(state)}>
                <form onSubmit={handleSubmit} ref={formRef} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="w-full flex items-center">
                        <div className="flex flex-col">
                            <strong className="font-bold text-2xl text-[#F45846]">Edit user here</strong>
                            <small className="text-base font-medium">Managers can update both cashier and manager roles on this page.</small>
                        </div>
                        <div className="ml-auto">
                            <button type="button" onClick={() => setIsShow(false)}>
                                <CircleX className="text-black w-6 h-6"/>
                            </button>
                        </div>
                    </div>
                    <div className="p-5">
                        <InputGroupComponent id={`name`} type="text" value={user.name} onChange={val => setUser({ ...user, name: val})} required={true} label="Nama user" placeholder="Masukan nama user baru"/>
                        <InputGroupComponent id={`email`} type="email" value={user.email} onChange={val => setUser({ ...user, email: val})} required={true} label="Email user" placeholder="Masukan email user baru"/>
                        <Select id={`role`} value={user.role} label="Role" required={true} onChange={val => setUser({ ...user, role: val })}>
                            <option value="">Select Category</option>
                            <option value="MANAGER">Manager</option>
                            <option value="CASHIER">Cashier</option>
                        </Select>
                    <ButtonDanger type={"button"}>
                        {isChangingPassword ? (
                            <InputGroupComponent
                                id={`password`}
                                type="password"
                                value={user.password}
                                onChange={val => setUser({ ...user, password: val })}
                                required={true}
                                label="New Password"
                                placeholder="Enter new password"
                            />
                        ) : (
                            <ButtonDanger type="button" onClick={() => setIsChangingPassword(true)}>
                                Change Default Password
                            </ButtonDanger>
                        )}
                    </ButtonDanger>
                    </div>
                    <div className="w-full p-5 flex rounded-b-2xl shadow">
                        <div className="flex ml-auto gap-2">
                            <ButtonOutlineDanger type="button" onClick={() => setIsShow(false)}>
                                Cancel
                            </ButtonOutlineDanger>
                            <ButtonPrimary type="submit">
                                Save
                            </ButtonPrimary>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default EditUser