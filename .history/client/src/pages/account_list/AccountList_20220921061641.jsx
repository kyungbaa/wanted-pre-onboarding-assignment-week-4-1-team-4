import React, { useEffect } from 'react';
import { getAccounts } from '../../services/account';

const AccountList = () => {
  // const [accounts, setAccounts] = useState([])

  useEffect(() => {
    const getAccountList = async () => {
      const res = await getAccounts();
      console.log('res', res);
    };
    getAccountList();
  }, []);

  return (
    <div className='bg-gray-100 w-full'>

    <div className='grid w-full px-2 py-4 border-solid border-gray-800'>
      <div className='grid grid-flow-col grid-cols-10 justify-between '>
        <div className='justify-self-center'>증권사</div>
        <div className='justify-self-center'>계좌번호</div>
        <div className='justify-self-center'>고객명</div>
        <div className='justify-self-center'>운용상태</div>
        <div className='justify-self-center'>계좌명</div>
        <div className='justify-self-center'>평가금액</div>
        <div className='justify-self-center'>입금금액</div>
        <div className='justify-self-center'>수익률</div>
        <div className='justify-self-center'>계좌활성화</div>
        <div className='justify-self-center'>계좌개설일</div>
      </div>
    </div>
    </div>
  );
};

export default AccountList;