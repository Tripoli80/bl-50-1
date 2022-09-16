import { Card, CardHeader, CardBody, Tag, CardTitle, CardText, CardPoster, CardFooter, UserBox, Avatar, UserInfo, UserName, Date } from './BlogCard.styled';
// import { format } from 'date-fns'
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// formatDistanceToNow(new Date(date), { addSuffix: true });
import { formatDistanceToNow } from 'date-fns';


export const BlogCard = ({ poster, tag, title, description, userName, avatar, postedAt }) => {
  

  // console.log(formatDistanceToNow(new Date("2022-02-01T11:14:11.105Z"), { addSuffix: true }))

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
            {/* <Date>{formatDistanceToNow("2022-04-06T18:46:01.577Z", { addSuffix: true })}</Date> */}
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
