import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

function OrderFilesList({files}) {
    return (
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
                        <TableCell component="th" scope="row">{file}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default OrderFilesList;