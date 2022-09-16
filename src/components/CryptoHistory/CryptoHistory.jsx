import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { format } from 'date-fns';
import { formatDistanceToNow } from 'date-fns';


export const CryptoHistory = ({ transactions }) => {
  
  console.log(formatDistanceToNow(new Date("2022-02-01T11:14:11.105Z"), { addSuffix: true }))

  return <BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

    <tbody>
      {transactions.map(({id, price, amount, date}) => (
        <Tr key={id}>
      <Td>{id}</Td>
      <Td>{price}</Td>
      <Td>{amount}</Td>
      <Td>{format(new Date(date), 'Pp', { addSuffix: true })
}</Td>
    </Tr>
      ))}

  </tbody>
</BaseTable>
};

