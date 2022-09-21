import React, { useEffect, useState } from 'react';
import { getAccounts } from '../../services/account';
import { Link } from 'react-router-dom';

import brokers from '../../data/brokers.json'
import accountStatus from "../../data/accountStatus.json"

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    const getAccountList = async () => {
      const res = await getAccounts(1, 20);
      console.log(res)
      setAccounts(res.data);
    };
    getAccountList();
  }, []);

  return (
    <table className="bg-gray-100 w-full">
      <thead className="flex w-full px-2 py-4">
        <tr className="flex justify-between w-full">
          <th className="justify-self-center flex flex-1">증권사</th>
          <th className="justify-self-center flex flex-1">계좌번호</th>
          <th className="justify-self-center flex flex-1">고객명</th>
          <th className="justify-self-center flex flex-1">운용상태</th>
          <th className="justify-self-center flex flex-1">계좌명</th>
          <th className="justify-self-center flex flex-1">평가금액</th>
          <th className="justify-self-center flex flex-1">입금금액</th>
          <th className="justify-self-center flex flex-1">수익률</th>
          <th className="justify-self-center flex flex-1">계좌활성화</th>
          <th className="justify-self-center flex flex-1">계좌개설일</th>
        </tr>
      </thead>
      {accounts.map(account => (
        <tbody className="flex justify-between w-full" key={account.uuid}>
          <tr className="justify-self-center flex flex-1 w-max">
            <td>{brokers[account.broker_id]}</td>
          </tr>
          <tr className="justify-self-center flex flex-1 w-max">
            <td>{account.number.split('').map((char,idx)=> idx > 1 && idx < account.number.length -2 ?  "*" : char ).join('')}</td>
          </tr>
          <tr className="justify-self-center flex flex-1 w-max">
            <td><Link to={`/users/${account.user_id}`}>{account.name}</Link></td>
          </tr>
          <tr className="justify-self-center flex flex-1 w-max">
            <td>{Object.keys(accountStatus).find(key=>accountStatus[key] === account.status)}</td>
          </tr>
          <tr className="justify-self-center flex flex-1 w-max">
            <td>{account.name}</td>
          </tr>
          <tr className="justify-self-center flex flex-1 w-max">
            <td>평가금액</td>
          </tr>
          <tr className="justify-self-center flex flex-1 w-max">
            <td>입금금액</td>
          </tr>
          <tr className="justify-self-center flex flex-1 w-max">
            <td>수익률</td>
          </tr>
          <tr className="justify-self-center flex flex-1 w-max">
            <td className={account.is_active ? 'text-blue-600 font-bold' : 'text-red-600 font-bold'}>{account.is_active ? "활성화" : "비활성화"}</td>
          </tr>
          <tr className="justify-self-center flex flex-1 w-max">
            <td>{account.created_at.slice(0,10)}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default AccountList;