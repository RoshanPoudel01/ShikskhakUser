import {
  Card,
  CardBody,
  Center,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import { svgAssets } from "@shikshak/assets/images/svgs";
import ChangePassword from "./ChangePassword";
import ViewProfile from "./UserProfile/ViewProfile";
const Profile = () => {
  const profileTabs = [
    {
      icon: <svgAssets.UserIcon height={"18px"} width={"18px"} />,
      title: "Profile",
      component: <ViewProfile />
    },
    {
      icon: (
        <svgAssets.LockIcon color="#35ABFF" height={"18px"} width={"18px"} />
      ),
      title: "Password",
      component: <ChangePassword />
    }
  ];
  return (
    <Center>
      <Card width={"100%"} padding={"40px"}>
        <CardBody p={0}>
          <Text fontWeight={700} fontSize={"20px"}>
            User Profile
          </Text>
          <Tabs variant={"colorful"}>
            <TabList>
              {profileTabs.map((tab, index) => (
                <Tab key={index} gap={2} padding={"16px"}>
                  {tab.icon}
                  <Text>{tab.title}</Text>
                </Tab>
              ))}
            </TabList>
            <TabIndicator
              mt="-5px"
              height="5px"
              bg="#00B5D8"
              borderRadius="3px 3px 0 0"
            />

            <TabPanels>
              {profileTabs.map((tab, index) => (
                <TabPanel key={index}>{tab.component}</TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>
    </Center>
  );
};

export default Profile;
