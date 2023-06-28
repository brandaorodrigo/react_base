import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import React, { useEffect, useState } from 'react';

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

type Props = Omit<UploadProps, 'onChange'> & {
    button?: React.ReactNode;
    files?: string[] | undefined;
    onChange: (files: string[]) => void;
};

const Custom: React.FC<Props> = ({
    action,
    button = <PlusOutlined />,
    files,
    headers,
    listType = 'picture-card',
    maxCount,
    onChange,
}) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    useEffect(() => {
        if (!files) {
            return;
        }
        const fileList = [] as UploadFile[];
        files.forEach((file, index) => {
            fileList.push({
                uid: String(index),
                name: file,
                status: 'done',
                url: file,
            });
        });
        setFileList(fileList);
    }, [files]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const handleChange: UploadProps['onChange'] = ({ fileList }) => {
        setFileList(fileList);
        const fix = [] as string[];
        fileList.forEach((file) => {
            if (file?.response?.url) {
                fix.push(file.response.url);
            }
            if (file?.url) {
                fix.push(file.url);
            }
        });
        onChange(fix);
    };

    return (
        <>
            <Upload
                action={action}
                fileList={fileList}
                headers={headers}
                listType={listType}
                maxCount={maxCount}
                name="file"
                onChange={handleChange}
                onPreview={handlePreview}
            >
                {maxCount && fileList.length >= maxCount ? null : button}
            </Upload>
            <Modal footer={null} onCancel={handleCancel} open={previewOpen}>
                <img
                    alt="Pré-visualização"
                    src={previewImage}
                    style={{
                        width: '100%',
                        padding: '20px',
                        borderRadius: '30px',
                    }}
                />
            </Modal>
        </>
    );
};

export default Custom;
export type { Props };
