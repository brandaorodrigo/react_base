import { DownloadOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import {
    Button,
    Col,
    Divider,
    Input,
    InputNumber,
    Layout,
    Pagination,
    Radio,
    Rate,
    Row,
    Select,
    Space,
    Switch,
    Tree,
    TreeSelect,
} from 'antd';
import React from 'react';

const InputGroup = Input.Group;

const { Option } = Select;
const { TreeNode } = Tree;
const { Search } = Input;

const Example: React.FC = () => {
    return (
        <Layout>
            <br />
            <Row>
                <Col span={24}>
                    <Divider orientation="left">Switch example</Divider>
                    &nbsp;&nbsp;
                    <Switch defaultChecked />
                    &nbsp;&nbsp;
                    <Switch defaultChecked loading />
                    &nbsp;&nbsp;
                    <Switch loading size="small" />
                </Col>
                <Col span={24}>
                    <Divider orientation="left">Radio Group example</Divider>
                    <Radio.Group buttonStyle="solid" defaultValue="c">
                        <Radio.Button value="a">a</Radio.Button>
                        <Radio.Button disabled value="b">
                            b
                        </Radio.Button>
                        <Radio.Button value="c">c</Radio.Button>
                        <Radio.Button value="d">d</Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
            <br />
            <Row>
                <Col span={24}>
                    <Divider orientation="left">Button example</Divider>
                    <div className="button-demo">
                        <Button icon={<DownloadOutlined />} type="primary" />
                        <Button icon={<DownloadOutlined />} shape="circle" type="primary" />
                        <Button icon={<DownloadOutlined />} shape="round" type="primary" />
                        <Button icon={<DownloadOutlined />} shape="round" type="primary">
                            Download
                        </Button>
                        <Button icon={<DownloadOutlined />} type="primary">
                            Download
                        </Button>
                        <br />
                        <Button.Group>
                            <Button type="primary">
                                <LeftOutlined />
                                Backward
                            </Button>
                            <Button type="primary">
                                Forward
                                <RightOutlined />
                            </Button>
                        </Button.Group>
                        <Button loading type="primary">
                            Loading
                        </Button>
                        <Button loading size="small" type="primary">
                            Loading
                        </Button>
                    </div>
                </Col>
                <Col span={24}>
                    <Divider orientation="left">Tree example</Divider>
                    <Tree
                        checkable
                        defaultCheckedKeys={['0-0-0', '0-0-1']}
                        defaultExpandedKeys={['0-0-0', '0-0-1']}
                        defaultSelectedKeys={['0-0-0', '0-0-1']}
                        showLine
                    >
                        <TreeNode key="0-0" title="parent 1">
                            <TreeNode disabled key="0-0-0" title="parent 1-0">
                                <TreeNode disableCheckbox key="0-0-0-0" title="leaf" />
                                <TreeNode key="0-0-0-1" title="leaf" />
                            </TreeNode>
                            <TreeNode key="0-0-1" title="parent 1-1">
                                <TreeNode
                                    key="0-0-1-0"
                                    title={<span style={{ color: '#1677ff' }}>sss</span>}
                                />
                            </TreeNode>
                        </TreeNode>
                    </Tree>
                </Col>
            </Row>
            <br />
            <Row>
                <Col span={24}>
                    <Divider orientation="left">Input (Input Group) example</Divider>
                    <InputGroup compact>
                        <Input defaultValue="0571" style={{ width: '20%' }} />
                        <Input defaultValue="26888888" style={{ width: '30%' }} />
                    </InputGroup>
                    <br />
                    <InputGroup compact>
                        <Select defaultValue="Option1">
                            <Option value="Option1">Option1</Option>
                            <Option value="Option2">Option2</Option>
                        </Select>
                        <Input defaultValue="input content" style={{ width: '50%' }} />
                        <InputNumber />
                    </InputGroup>
                    <br />
                    <Search enterButton="Search" placeholder="input search text" />
                    <br />
                    <br />
                    <Row>
                        <Col span={24}>
                            <Divider orientation="left">Select example</Divider>
                            <Space wrap>
                                <Select defaultValue="مورچه" mode="multiple" style={{ width: 120 }}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="مورچه">مورچه</Option>
                                    <Option disabled value="disabled">
                                        Disabled
                                    </Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                <Select defaultValue="مورچه" disabled style={{ width: 120 }}>
                                    <Option value="مورچه">مورچه</Option>
                                </Select>
                                <Select defaultValue="مورچه" loading style={{ width: 120 }}>
                                    <Option value="مورچه">مورچه</Option>
                                </Select>
                                <Select
                                    filterOption={(input, option) =>
                                        option?.props.children
                                            .toLowerCase()
                                            .includes(input.toLowerCase())
                                    }
                                    optionFilterProp="children"
                                    placeholder="Select a person"
                                    showSearch
                                    style={{ width: 200 }}
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="سعید">سعید</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </Space>
                        </Col>
                        <Col span={24}>
                            <Divider orientation="left">TreeSelect example</Divider>
                            <TreeSelect
                                allowClear
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                placeholder="Please select"
                                showSearch
                                style={{ width: '100%' }}
                                treeDefaultExpandAll
                            >
                                <TreeNode key="0-1" title="parent 1">
                                    <TreeNode key="0-1-1" title="parent 1-0">
                                        <TreeNode key="random" title="my leaf" />
                                        <TreeNode key="random1" title="your leaf" />
                                    </TreeNode>
                                    <TreeNode key="random2" title="parent 1-1">
                                        <TreeNode
                                            key="random3"
                                            title={<b style={{ color: '#08c' }}>sss</b>}
                                        />
                                    </TreeNode>
                                </TreeNode>
                            </TreeSelect>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col span={12}>
                            <Divider orientation="left">Rate example</Divider>
                            <Rate defaultValue={2.5} />
                            <br />
                            <strong>* Note:</strong> Half star not implemented in RTL direction, it
                            will be supported after{' '}
                            <a href="https://github.com/react-component/rate">rc-rate</a> implement
                            rtl support.
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col span={24}>
                    <Divider orientation="left">Pagination example</Divider>
                    <Pagination defaultCurrent={3} showSizeChanger total={500} />
                </Col>
            </Row>
            <br />
        </Layout>
    );
};

export default Example;
