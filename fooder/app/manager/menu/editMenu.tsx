"use client"

import { IMenu } from "@/app/types"
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



const EditMenu = ({ selectedMenu }: { selectedMenu: IMenu }) => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const [menu, setMenu] = useState<IMenu>({ ...selectedMenu })
    const router = useRouter()
    const TOKEN = getCookie("token") || ""
    const [file, setFile] = useState<File | null>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const openModal = () => {
        setMenu({ ...selectedMenu })
        setIsShow(true)
        if (formRef.current) formRef.current.reset()
    }
    const handleSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault()
            const url = `${BASE_API_URL}/menu/${selectedMenu.id}`
            const { name, price, description, category } = menu
            const payload = new FormData()
            payload.append("name", name || "")
            payload.append("price", price !== undefined ? price.toString() : "0")
            payload.append("description", description || "")
            payload.append("category", category || "")
            if (file !== null) payload.append("picture", file || "")
            const { data } = await put(url, payload, TOKEN)
            if (data?.status) {
                setIsShow(false)
                toast(data?.message, { hideProgressBar: true, containerId: `toastMenu`, type: `success` })
                setTimeout(() => router.refresh(), 1000)
            } else {
                toast(data?.message, { hideProgressBar: true, containerId: `toastMenu`, type: `warning` })
            }
        } catch (error) {
            console.log(error);
            toast(`Something Wrong`, { hideProgressBar: true, containerId: `toastMenu`, type: `error` })
        }
    }
    return (
        <div>
            <ToastContainer containerId={`toastMenu`} />
            <ButtonPrimary type="button" onClick={() => openModal()} className="bg-[#F45846] text-white text-base font-semibold py-3 px-8 rounded-md hover:shadow-lg">
                Edit
            </ButtonPrimary>
            <Modal isShow={isShow} onClose={state => setIsShow(state)}>
                <form action="" onSubmit={handleSubmit} ref={formRef} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="sticky top-0 bg-white px-5 pt-5 pb-3">
                        <div className="w-full flex items-center">
                            <div className="flex flex-col">
                                <strong className="font-bold text-2xl text-[#F45846]">Edit your menu here</strong>
                                <small className="text-base font-medium">Managers can update both cashier and manager roles on this page.</small>
                            </div>
                            <div className="ml-auto">
                                <button type="button" onClick={() => setIsShow(false)}>
                                    <CircleX className="text-black w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <InputGroupComponent id={`name`} type="text" value={menu.name} onChange={val => setMenu({ ...menu, name: val })} required={true} label="Nama menu" placeholder="Masukan nama menu baru" />
                        <InputGroupComponent id={`price`} type="number" value={menu.price.toString()} onChange={val => setMenu({ ...menu, price: Number(val) })} required={true} label="Harga menu baru" />
                        <InputGroupComponent id={`description`} type="text" value={menu.description} onChange={val => setMenu({ ...menu, description: val })} required={true} label="Deksripsi menu" placeholder="Masukan deskripsi menu baru" />
                        <Select id={`category`} value={menu.category} label="Category" required={true} onChange={val => setMenu({ ...menu, category: val })}>
                            <option value="">Select Category</option>
                            <option value="FOOD">Food</option>
                            <option value="SNACK">Snack</option>
                            <option value="DRINK">Drink</option>
                        </Select>
                        <FileInput acceptTypes={["application/pdf", "image/png", "image/jpeg", "image/jpg"]} id="profile_picture" label="Upload picture (max 2 mb, pdf/jpg/jpeg/png)" onChange={f => setFile(f)} required={false} />
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
export default EditMenu