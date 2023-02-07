import React from "react";
import {Stack, Icon, Text, Image, StackProps} from "@chakra-ui/react";
import {BsThreeDots} from "react-icons/bs";
import YoImg from "../assets/yooo.jpg"

const ProfileButton: React.FC<StackProps> = (props) => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      padding={4}
      {...props}
    >
      <Stack alignItems="center" direction="row" spacing={3}>
        <Image
          borderRadius="50%"
          height={10}
          src={YoImg}
          width={10}
        />
        <Stack spacing={0}>
          <Text fontSize="sm" fontWeight="bold" lineHeight="normal">
            Matecava
          </Text>
          <Text fontSize="xs" lineHeight="normal" textStyle="translucid">
            @Matecava
          </Text>
        </Stack>
      </Stack>
      <Icon as={BsThreeDots} />
    </Stack>
  );
};

export default ProfileButton;
