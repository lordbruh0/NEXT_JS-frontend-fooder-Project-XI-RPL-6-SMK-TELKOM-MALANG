'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import { CirclePlus, CircleX } from 'lucide-react';
import { ButtonSuccess, ButtonDanger, ButtonPrimary, ButtonOutlineDanger } from '@/components/button';
import { InputGroupComponent } from '@/components/InputComponent';
import Modal from '@/components/Modal';
import Select from '@/components/Select';
import FileInput from '@/components/FileInput';
import { post } from '@/lib/api-bridge';
import { getCookie } from '@/lib/client-cookies';
import { BASE_API_URL } from '@/global';

const AddUser = () => {
    const [isShow, setIsShow] = useState(false);
    const [file, setFile] = useState(null);
    const formRef = useRef(null);
    const router = useRouter();
    const TOKEN = getCookie("token") || "";

    const [user, setUser] = useState({
        id: 0, uuid: "", name: "", email: "", password: "",
        role: "", profile_picture: "", createdAt: "", updatedAt: ""
    });

    const openModal = () => {
        setUser({
            id: 0, uuid: "", name: "", email: "", password: "",
            role: "", profile_picture: "", createdAt: "", updatedAt: ""
        });
        setIsShow(true);
        if (formRef.current) formRef.current.reset();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `${BASE_API_URL}/user/register`;
            const { name, email, password, role } = user;
            const payload = new FormData();
            payload.append("name", name || "");
            payload.append("email", email || "");
            payload.append("role", role || "");
            payload.append("password", password || "");
            if (file) payload.append("picture", file);
            
            const { data } = await post(url, payload, TOKEN);
            if (data?.status) {
                setIsShow(false);
                toast.success(data?.message, { containerId: "toastUser" });
                setTimeout(() => router.refresh(), 1000);
            } else {
                toast.warn(data?.message, { containerId: "toastUser" });
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong", { containerId: "toastUser" });
        }
    };

    return (
        <div>
            <ToastContainer containerId="toastUser" position="top-right" autoClose={3000} />
            <ButtonSuccess type="button" onClick={openModal} className="flex items-center gap-2 px-7 py-2 rounded-lg shadow hover:shadow-lg">
                <CirclePlus className="w-5 h-5" />
                <span className="text-lg font-semibold">Add User</span>
            </ButtonSuccess>
            <Modal isShow={isShow} onClose={state => setIsShow(state)}>
                <form onSubmit={handleSubmit}>

                    <div className="sticky top-0 bg-white px-5 pt-5 pb-3">
                    <div className="w-full flex items-center">
                            <div className="flex flex-col">
                                <strong className="font-bold text-2xl text-[#F45846]">Add user here</strong>
                                <small className="text-base font-medium">Only managers can create users on this page.</small>
                            </div>
                            <div className="ml-auto">
                                <button type="button" onClick={() => setIsShow(false)}>
                                    <CircleX className="text-black w-6 h-6" />
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                   </svg> */}
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="p-5">
                        <InputGroupComponent id="name" type="text" value={user.name} onChange={val => setUser({ ...user, name: val })} required label="Nama user" placeholder="Masukan nama user" />
                        <InputGroupComponent id="email" type="email" value={user.email} onChange={val => setUser({ ...user, email: val })} required label="Email user" placeholder="Masukan email user" />
                        <InputGroupComponent id="password" type="password" value={user.password} onChange={val => setUser({ ...user, password: val })} required label="Password" placeholder="Masukan password" />
                        <Select id="role" value={user.role} label="Role" required onChange={val => setUser({ ...user, role: val })}>
                            <option value="">Select Role</option>
                            <option value="MANAGER">Manager</option>
                            <option value="CASHIER">Cashier</option>
                        </Select>
                        <FileInput acceptTypes={["image/png", "image/jpeg", "image/jpg"]} id="profile_picture" label="Upload Picture (max 2 mb, pdf/jpg/jpeg/png)" onChange={setFile} required={false} />
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
    );
};

export default AddUser;
