import { Snackbar } from "@mui/joy";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import Modal from "../Modal/Modal";

function OrderFilesList({files, orderId}) {

    async function handleFileClick(evt, file) {
        console.log(evt.target, file);
        const fileName = file.split('/')[2];
        console.log(fileName);

        setSnackState({
            isOpen: true,
            text: 'Отправляем запрос на подписание URL для скачивания'
        })

        const preSignedUrlResponse = await fetch(`https://api.hexie.ru/orders/${orderId}/files/${fileName}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Authorization": "Bearer 234",
            }
        });
        setSnackState({
            isOpen: true,
            text: 'Успешно'
        })

        const preSignedUrl = await preSignedUrlResponse.json();
        console.log(preSignedUrl);
        setSnackState({
            isOpen: true,
            text: preSignedUrl.url
        })
        window.open(preSignedUrl.url, '_blank', 'noopener,noreferrer')

        setTimeout(()=>{
            setSnackState({
                ...snackState,
                isOpen: false
            })
        }, 5000)
    }

    const [snackState, setSnackState] = React.useState({
        isOpen: false,
        text: ''
    });

    return (
        <>
            <Table sx={{ width: '100%' }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell className="text-xs">Что в файле</TableCell>
                        <TableCell className="text-xs">Ссылка</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {files.map((file) => 
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row"><span className="cursor-pointer underline underline-offset-1 hover:opacity-65" onClick={(evt) => handleFileClick(evt, file)}>{file}</span></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {snackState.isOpen && 
                <Snackbar 
                    open={snackState.isOpen}
                >
                    <span className="text-lg text-primary-black">{snackState.text}</span>
                </Snackbar>
            }
        </>
    )
}

export default OrderFilesList;