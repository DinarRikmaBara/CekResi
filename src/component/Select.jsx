import React from 'react'

export const Select = ({ selectedValue, handleChange }) => {
    const listOption = [
        { value: 'jne', option: 'JNE' },
        { value: 'jnt', option: 'JNT' },
        { value: 'jnt_cargo', option: 'JNT Cargo' },
        { value: 'sicepat', option: 'SiCepat' },
        { value: 'anteraja', option: 'AnterAja' },
        { value: 'spx', option: 'Shopee Express' },
        { value: 'lex', option: 'Lazada Express' },
        { value: 'kurir_tokopedia', option: 'Kurir Rekomendasi' },
    ];
    return (
        <select required className="select select-bordered select-sm w-full max-w-xs mb-2" value={selectedValue} onChange={handleChange} >
            <option value="" disabled>Pengiriman?</option>
            {
                listOption.map((item, index) => (
                    <option key={index} value={item.value}>{item.option}</option>
                ))
            }
        </select>
    )
}
