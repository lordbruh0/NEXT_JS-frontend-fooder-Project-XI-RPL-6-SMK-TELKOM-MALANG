"use client"

import { IUser } from "@/app/types"
import { BASE_API_URL } from "@/global"
import { post } from "@/lib/api-bridge"
import { getCookie } from "@/lib/client-cookies"
import { useRouter } from "next/navigation"
import { FormEvent, useRef, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { ButtonSuccess, ButtonDanger, ButtonPrimary, ButtonOutlineDanger } from "@/components/button"
import { InputGroupComponent } from "@/components/InputComponent"
import Modal from "@/components/Modal"
import Select from "@/components/Select"
import FileInput from "@/components/FileInput"
import { CirclePlus, CircleX } from "lucide-react"

const AddUser = () => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const [user, setUser] = useState<IUser>({
        id: 0, uuid: ``, name: ``, email: ``, password: ``,
        role: ``, profile_picture: ``, createdAt: ``, updatedAt: ``
    })
    const router = useRouter()
    const TOKEN = getCookie("token") || ""

    const [file, setFile] = useState<File | null>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const openModal = () => {
        setUser({
            id: 0, uuid: ``, name: ``, email: ``, password: ``,
            role: ``, profile_picture: ``, createdAt: ``, updatedAt: ``
        })
        setIsShow(true)
        if (formRef.current) formRef.current.reset()
    }

    const handleSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault()
            const url = `${BASE_API_URL}/user/register  `
            const { name, email, password, role } = user
            const payload = new FormData()
            payload.append("name", name || "")
            payload.append("email", email || "")
            payload.append("role", role || "")
            payload.append("password", password || "")
            if (file !== null) payload.append("picture", file || "")
            
            const { data } = await post(url, payload, TOKEN)
            if (data?.status) {
                setIsShow(false)
                toast(data?.message, { hideProgressBar: true, containerId: `toastUser`, type: `success` })
                setTimeout(() => router.refresh(), 1000)
            } else {
                toast(data?.message, { hideProgressBar: true, containerId: `toastUser`, type: `warning` })
            }
        } catch (error) {
            console.log(error)
            toast(`Something Wrong`, { hideProgressBar: true, containerId: `toastUser`, type: `error` })
        }
    }

    return (
        <div>
            <ToastContainer containerId={`toastUser`} />
            <ButtonSuccess type="button" onClick={() => openModal()}>
                <div className="flex items-center gap-2">
                    <CirclePlus />
                    <h1 className="font-bold text-lg">Add User</h1>
                </div>
            </ButtonSuccess>
            <Modal isShow={isShow} onClose={state => setIsShow(state)}>
                <form onSubmit={handleSubmit} ref={formRef}>
                    {/* modal header */}
                    <div className="sticky top-0 bg-white px-5 pt-5 pb-3">
                        <div className="w-full flex items-center">
                            <div className="flex flex-col">
                                <strong className="font-bold text-2xl text-[#F45846]">Add User</strong>
                                <small className="text-base font-medium">Only managers can create users on this page.</small>
                            </div>
                            <div className="ml-auto">
                                <button type="button" onClick={() => setIsShow(false)}>
                                    <CircleX className="text-black w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* end modal header */}

                    {/* modal body */}
                    <div className="p-5">
                        <InputGroupComponent id={`name`} type="text"
                            value={user.name}
                            onChange={val => setUser({ ...user, name: val })}
                            required={true} label="Name"
                            placeholder="Enter user name"
                        />

                        <InputGroupComponent id={`email`} type="email" value={user.email}
                            onChange={val => setUser({ ...user, email: val })}
                            required={true} label="Email" placeholder="Enter user email" />

                        <InputGroupComponent id={`password`} type="password" value={user.password}
                            onChange={val => setUser({ ...user, password: val })}
                            required={true} label="Password" placeholder="Enter user password" />

                        <Select id={`role`} value={user.role} label="Role"
                            required={true} onChange={val => setUser({ ...user, role: val })}>
                            <option value="" className="text-base font-bold">Select Role</option>
                            <option value="MANAGER">Manager</option>
                            <option value="CASHIER">Cashier</option>
                        </Select>

                        <FileInput acceptTypes={["application/pdf", "image/png", "image/jpeg", "image/jpg"]} id="profile_picture"
                            label="Upload Picture (Max 2MB, PDF/JPG/JPEG/PNG)" onChange={f => setFile(f)} required={false} />

                    </div>
                    {/* end modal body */}

                    {/* modal footer */}
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
                    {/* end modal footer */}
                </form>
            </Modal>

        </div>
    )
}
export default AddUser
