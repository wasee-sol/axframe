import * as React from "react";
import styled from "@emotion/styled";
import UserAvatar from "@template/user/UserAvatar";

interface Props {
  opened: boolean;
}

function UserInfo(props: Props) {
  return (
    <UserInfoContainer>
      <UserAvatar size={"medium"} />
      <UserCard></UserCard>
      <DownDownHandle></DownDownHandle>
    </UserInfoContainer>
  );
}

const UserInfoContainer = styled.div``;
const UserCard = styled.div``;
const DownDownHandle = styled.div``;

export default UserInfo;
