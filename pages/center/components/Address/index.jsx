import { useState } from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  Form,
  Input,
  Modal,
  Select
} from 'antd';
import styles from './index.module.less';

const Address = (props) => {
  const [defaultAddressId, setDefaultAddressId] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('新增收货地址');
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  const addAddress = () => {
    setTitle('新增收货地址');
    setIsModalVisible(true);
  };
  const editAddress = () => {
    setTitle('编辑收货地址');
    setIsModalVisible(true);
  }
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onChange = (value) => {
    console.log(value);
  };
  const selectBefore = (
    <Select defaultValue="+86" className="select-before">
      <Option value="+86">+86</Option>
      <Option value="+88">+88</Option>
    </Select>
  );
  return (
    <div className={styles.address_view}>
      <h3 className={styles.address_view_title}>我的收货地址</h3>
      <div className={styles.address_view_action}>
        <a
          className={styles.address_view_action_add}
          onClick={addAddress}
        >
          新增收货地址
        </a>
      </div>
      <ul className={styles.address_view_list}>
        {
          [1,2,3,4,5,6,7,8].map(item=>
            <li className={styles.address_view_list_item}>
              <div className={styles.address_view_list_item_info}>
                <div className={styles.address_view_list_item_info_revicer}>
                  橙子  浙江
                  {
                    item === defaultAddressId &&
                    <span className={styles.address_view_list_item_info_revicer_default}>默认地址</span>
                  }
                </div>
                {
                  item === defaultAddressId &&
                  <div className={styles.address_view_list_item_info_actions}>
                    <span
                      className={styles.address_view_list_item_info_actions_single}
                      onClick={()=>{editAddress(item)}}
                    >
                      编辑
                    </span>
                    <span
                      className={styles.address_view_list_item_info_actions_single}
                    >
                      删除
                    </span>
                  </div>
                }
              </div>
              <div className={styles.address_view_list_item_detail}>
                <div className={styles.address_view_list_item_detail_label}>收货人：</div>
                <div className={styles.address_view_list_item_detail_value}>橙子</div>
              </div>
              <div className={styles.address_view_list_item_detail}>
                <div className={styles.address_view_list_item_detail_label}>所在地区：</div>
                <div className={styles.address_view_list_item_detail_value}>安徽省马栏山区东新街道</div>
              </div>
              <div className={styles.address_view_list_item_detail}>
                <div className={styles.address_view_list_item_detail_label}>地址：</div>
                <div className={styles.address_view_list_item_detail_value}>淮北国际12楼</div>
              </div>
              <div className={styles.address_view_list_item_detail}>
                <div className={styles.address_view_list_item_detail_label}>手机：</div>
                <div className={styles.address_view_list_item_detail_value}>18879089901</div>
              </div>
              <div className={styles.address_view_list_item_detail}>
                <div className={styles.address_view_list_item_detail_label}>固定电话：</div>
                <div className={styles.address_view_list_item_detail_value}>--</div>
              </div>
              <div className={styles.address_view_list_item_detail}>
                <div className={styles.address_view_list_item_detail_label}>电子邮箱：</div>
                <div className={styles.address_view_list_item_detail_value}>--</div>
              </div>
              {
                item !== defaultAddressId &&
                <div className={styles.address_view_list_item_actions}>
                  <div
                    className={styles.address_view_list_item_actions_single}
                  >
                    设为默认
                  </div>
                  <div
                    className={styles.address_view_list_item_actions_single}
                    onClick={()=>{editAddress(item)}}
                  >
                    编辑
                  </div>
                  <div
                    className={styles.address_view_list_item_actions_single}
                  >
                    删除
                  </div>
                </div>
              }
            </li>
          )
        }
      </ul>
      <Modal
        title={title}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width='926px'
      >
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 12,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="收货人姓名："
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="地址："
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Cascader options={options} onChange={onChange} placeholder="Please select" />
          </Form.Item>
          <Form.Item
            label="详细地址："
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="收货人手机号："
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="电话号："
            name="username"
          >
            <Input addonBefore={selectBefore} />
          </Form.Item>
          <Form.Item
            label="邮政编码："
            name="username"
          >
            <Input />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 12 }}>
            <Checkbox>设为默认地址</Checkbox>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 12
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
export default Address;