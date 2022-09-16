import { Card, CardHeader, CardBody, Tag, CardTitle, CardText, CardPoster, CardFooter, UserBox, Avatar, UserInfo, UserName, Date as DateMy } from './BlogCard.styled';
// import { format } from 'date-fns'
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// formatDistanceToNow(new Date(date), { addSuffix: true });
import { format } from 'date-fns';
import { formatDistanceToNow } from 'date-fns';


export const BlogCard = ({ poster, tag, title, description, userName, avatar, postedAt }) => {
  
  console.log(formatDistanceToNow(new Date("2022-02-01T11:14:11.105Z"), { addSuffix: true }))

  // console.log(formatDistanceToNow(new Date("2022-02-01T11:14:11.105Z"), { addSuffix:true }))

  // console.log(formatDistanceToNow(new Date()));
  
  return (
    <Card>
      <CardHeader>
        <CardPoster
          src={poster}
          alt="card__image"
        />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>
          {description}
        </CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={userName} />
          <UserInfo>
            <UserName>{userName}</UserName>
            <DateMy>{formatDistanceToNow(new Date(postedAt), { addSuffix: true })}</DateMy>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
