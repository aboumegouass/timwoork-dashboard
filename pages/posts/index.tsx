import { Alert } from "@/components/Alert/Alert";
import API from '../../config';
import { motion } from "framer-motion";
import { ReactElement, useEffect, useState } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";

function index(): ReactElement {
    const [postsList, setPostsList] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const refreshData = async () => {
        setIsLoading(true)
        try {
            const res: any = await API.get('dashboard/products')
            if (res) {
                setIsLoading(false)
                setPostsList(res.data.data)
                console.log(res.data);

                setIsError(false)
            }
        } catch (error) {
            setIsError(true)
            setIsLoading(false)
        }
    }

    const switchStatus = (status) => {
        switch (status) {
            case null:
                return (<span className="badge bg-warning text-dark">قيد الإنتظار</span>)
            case 0:
                return (<span className="badge bg-danger text-light">مرفوضة</span>)
            case 1:
                return (<span className="badge bg-success text-light">نشطة</span>)
        }
    }

    /*const deleteHandle = (id) => {
        const MySwal = withReactContent(Swal)

        const swalWithBootstrapButtons = MySwal.mixin({
            customClass: {
                confirmButton: 'btn butt-red butt-sm me-1',
                cancelButton: 'btn butt-green butt-sm'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'هل أنت متأكد؟',
            text: "هل انت متأكد أنك تريد حذف هذا العنصر",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'نعم, أريد الحذف',
            cancelButtonText: 'لا',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    const res: any = axios.post(`https://api.wazzfny.com/dashboard/badges/${id}/delete`)
                    if (res) {
                        refreshData()
                    }
                } catch (error) {
                    setIsError(true)
                    setIsLoading(false)
                }
                swalWithBootstrapButtons.fire(
                    'تم الحذف!',
                    'لقد تم حذف هذا العنصر بنجاح',
                    'success'
                )
                refreshData()
            } else if (
                
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'ملغى',
                    'تم الإلغاء',
                    'error'
                )
            }
        })

    }*/
    useEffect(() => {
        refreshData()
    }, [])
    const catVariants = {
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.072,
            },
        }),
        hidden: { opacity: 0, y: 9 },
    }
    const activateProduct = async (id : any) => {
        setIsLoading(true)
        try {
            const res: any = await API.post(`dashboard/products/${id}/activeProduct`)
            if (res) {
                setIsLoading(false)
                setIsError(false)
                refreshData()
            }
        } catch (error) {
            setIsError(true)
            setIsLoading(false)
        }
    }
    const rejectProduct = async (id : any) => {
        setIsLoading(true)
        try {
            const res: any = await API.post(`dashboard/products/${id}/rejectProduct`)
            if (res) {
                setIsLoading(false)
                setIsError(false)
                refreshData()
            }
        } catch (error) {
            setIsError(true)
            setIsLoading(false)
        }
    }
    // Return statement.
    return (
        <>
            <div className="timlands-panel">
                <div className="timlands-panel-header">
                    <h2 className="title"><span className="material-icons material-icons-outlined">collections_bookmark</span>إدارة الخدمات</h2>
                </div>
                <div className="timlands-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>العنوان</th>
                                <th className="hidden-tem">الحالة</th>
                                <th className="hidden-tem">التاريخ</th>
                                <th>الأدوات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {postsList.map((e: any, i) => (
                                <motion.tr initial="hidden" variants={catVariants} animate="visible" custom={i} key={e.id}>
                                    <td>{e.title}</td>
                                    <td className="hidden-tem">{switchStatus(e.status)}</td>
                                    <td className="hidden-tem" title={e.created_at}>.....</td>
                                    <td className="tools-col">
                                        {(e.status == 0 || e.status == null) ?
                                            <button title="تنشيط هذه الخدمة" onClick={() => activateProduct(e.id)} className="table-del green">
                                                <span className="material-icons material-icons-outlined">
                                                    check
                                                </span>
                                            </button> : ''
                                        }
                                        {(e.status == 1) ?
                                            <button title="تعطيل هذه الخدمة" onClick={() => rejectProduct(e.id)} className="table-del warning">
                                                <span className="material-icons material-icons-outlined">
                                                    cancel
                                                </span>
                                            </button> : ''
                                        }

                                        <button  title="حذف هذه الخدمة" className="table-del error">
                                            <span className="material-icons material-icons-outlined">
                                                delete
                                            </span>
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                    {isError &&
                        <Alert type="error">
                            <p className="text"><span className="material-icons">warning_amber</span> حدث خطأ غير متوقع</p>
                        </Alert>}
                    {isLoading &&
                        <motion.div initial={{ opacity: 0, y: 29 }} animate={{ opacity: 1, y: 0 }} className="d-flex py-5 spinner-loader justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </motion.div>
                    }
                </div>
            </div>
        </>
    );
}
index.getLayout = function getLayout(page: any): ReactElement {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}

export default index;
