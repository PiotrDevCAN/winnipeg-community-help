import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useRequestContext } from '../../context/RequestContext';

const ListTable = () => {

    const { filteredItems: data } = useRequestContext();

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
                    color: filtered ? '#1677ff' : undefined,
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
            title: 'Name',
            dataIndex: 'label',
            key: 'label',
            width: '30%',
            ...getColumnSearchProps('label'),
            sorter: (a, b) => a.label.length - b.label.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Alias',
            dataIndex: 'alias',
            key: 'alias',
            width: '20%',
            ...getColumnSearchProps('alias'),
            sorter: (a, b) => a.alias.length - b.alias.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Leader',
            dataIndex: 'leader',
            key: 'leader',
            width: '30%',
            ...getColumnSearchProps('leader'),
            sorter: (a, b) => a.leader.length - b.leader.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: '30%',
            ...getColumnSearchProps('email'),
            sorter: (a, b) => a.email.length - b.email.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            width: '30%',
            ...getColumnSearchProps('phone'),
            sorter: (a, b) => a.phone.length - b.phone.length,
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
            dataIndex: 'created',
            key: 'created',
            width: '30%',
            ...getColumnSearchProps('created'),
            sorter: (a, b) => a.created.length - b.created.length,
            sortDirections: ['descend', 'ascend'],
        },
    ];
    return <Table
        columns={columns}
        dataSource={data}
        pagination={{
            position: ['none', 'bottomCenter'],
        }}
    />;
}

export default ListTable;