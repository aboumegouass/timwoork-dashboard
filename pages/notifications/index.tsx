import Layout from '@/components/Layout/HomeLayout'
import Notification from '@/components/Notification'
import { ReactElement } from "react";

function index() {
    return (
        <div className="my-2 py-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="notifications-panel">
                        <div className="list-group">
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
index.getLayout = function getLayout(page): ReactElement {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default index
