"use client"

import { IUser } from "@/app/types"
import { BASE_API_URL } from "@/global"
import { drop } from "@/lib/api-bridge"
import { getCookie } from "@/lib/client-cookies"
import { useRouter } from "next/navigation"
import { FormEvent, useRef, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { ButtonPrimary, ButtonDanger, ButtonOutlineDanger } from "@/components/button"
import Modal from "@/components/Modal"
import { CircleX } from "lucide-react"
import { AlertDanger } from "@/components/alert"

const DeleteUser = ({ selectedUser }: { selectedUser: IUser }) => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const [user, setUser] = useState<IUser>({ ...selectedUser })
    const router = useRouter()
    const TOKEN = getCookie("token") || ""
    const openModal = () => {
        setUser({ ...selectedUser })
        setIsShow(true)
    }
    const handleSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault()
            const url = `${BASE_API_URL}/user/${selectedUser.id}`
            const { data } = await drop(url, TOKEN)
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
            <ToastContainer containerId={`toastUser`} />
            <ButtonPrimary type="button" onClick={() => openModal()} className="bg-[#F45846] text-white text-base font-semibold py-3 px-8 rounded-md hover:shadow-lg">
                Delete
            </ButtonPrimary>
            <Modal isShow={isShow} onClose={state => setIsShow(state)}>
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* modal header */}
                    <div className="sticky top-0 bg-white px-5 pt-5 pb-3">

                        <div className="w-full flex items-center">
                            <div className="flex flex-col">
                                <strong className="font-bold text-2xl text-[#F45846]">Delete User</strong>
                                <small className="text-base font-medium">User with existing transaction data cannot be deleted from this page.</small>
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
                    <AlertDanger children={`Are you sure you want to delete this user ${user.name}?`} title={`Delete ${user.name}`}/>
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
export default DeleteUser