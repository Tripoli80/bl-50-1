import { Card, CardHeader, CardBody, Tag, CardTitle, CardText, CardPoster, CardFooter, UserBox, Avatar, UserInfo, UserName, Date } from './BlogCard.styled';
// import { format } from 'date-fns'
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export const BlogCard = ({ poster, tag, title, description, userName, avatar, postedAt }) => {
  
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
            <Date>{postedAt}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
