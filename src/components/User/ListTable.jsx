import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';

const ListTable = ({ data }) => {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    // color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            width: '5%',
            ...getColumnSearchProps('id'),
            sorter: (a, b) => a.id.length - b.id.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Community',
            dataIndex: 'community_name',
            key: 'community_name',
            width: '5%',
            ...getColumnSearchProps('community_name'),
            sorter: (a, b) => a.community_name.length - b.community_name.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Sub Community',
            dataIndex: 'sub_community_name',
            key: 'sub_community_name',
            width: '5%',
            ...getColumnSearchProps('sub_community_name'),
            sorter: (a, b) => a.sub_community_name.length - b.sub_community_name.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'First name',
            dataIndex: 'first_name',
            key: 'first_name',
            width: '30%',
            ...getColumnSearchProps('first_name'),
            sorter: (a, b) => a.first_name.length - b.first_name.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Last name',
            dataIndex: 'last_name',
            key: 'last_name',
            width: '30%',
            ...getColumnSearchProps('last_name'),
            sorter: (a, b) => a.first_name.length - b.first_name.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Nick',
            dataIndex: 'nick',
            key: 'nick',
            width: '20%',
            ...getColumnSearchProps('nick'),
            sorter: (a, b) => a.nick.length - b.nick.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
            width: '30%',
            ...getColumnSearchProps('email'),
            sorter: (a, b) => a.email.length - b.email.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Phone',
            dataIndex: 'phone_number',
            key: 'phone_number',
            width: '30%',
            ...getColumnSearchProps('phone_number'),
            sorter: (a, b) => a.phone_number.length - b.phone_number.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
            width: '30%',
            ...getColumnSearchProps('website'),
            sorter: (a, b) => a.website.length - b.v.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: '30%',
            ...getColumnSearchProps('description'),
            sorter: (a, b) => a.description.length - b.description.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Created',
            dataIndex: 'created_at',
            key: 'created_at',
            width: '30%',
            ...getColumnSearchProps('created_at'),
            sorter: (a, b) => a.created_at.length - b.created_at.length,
            sortDirections: ['descend', 'ascend'],
        },
    ];

    return <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={{
            position: ['none', 'bottomCenter'],
        }}
    />;
}

export default ListTable;