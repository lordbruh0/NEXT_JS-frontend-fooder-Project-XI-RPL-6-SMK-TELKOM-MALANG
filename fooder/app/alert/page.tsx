import { AlertInfo } from "@/components/alert";
import { AlertSuccess  } from "@/components/alert";
import { AlertWarning } from "@/components/alert";
import { AlertDanger } from "@/components/alert";


const TestAlert = () => {
    return(
        <div className="m-10">
            <AlertInfo title="Alert Info">
                Ini adalah alert dengan tipe info
            </AlertInfo>
            <AlertSuccess title="Alert Success">
                Ini adalah alert dengan tipe success
            </AlertSuccess>
            <AlertWarning title="Alert Warning">
                Ini adalah alert dengan tipe warning
            </AlertWarning>
            <AlertDanger title="Alert Danger">
                Ini adalah alert dengan tipe danger
            </AlertDanger>
        </div>
    )
}

export default TestAlert;

