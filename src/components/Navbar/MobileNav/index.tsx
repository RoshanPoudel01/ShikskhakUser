// import NoImage from "@/assets/icons/UserIcon/user.png";
// import {
//   Avatar,
//   Drawer,
//   DrawerBody,
//   DrawerCloseButton,
//   DrawerContent,
//   DrawerFooter,
//   DrawerHeader,
//   Flex,
//   Icon,
//   Link
// } from "@chakra-ui/react";
// import isAuthenticated from "@shikshak/services/service-token";
// import { BiHome } from "react-icons/bi";
// import { NavLink, useOutletContext } from "react-router-dom";

// interface MenuItems {
//   id: number;
//   slug: string;
//   category_id?: number;
//   title: string;
// }

// interface MobileNavProps {
//   isOpen: boolean;
//   onClose: () => void;
//   menus: Array<MenuItems>;
// }

// const MobileNav = ({ isOpen, onClose, menus }: MobileNavProps) => {
//   const data: any = isAuthenticated ? useOutletContext() : { data: null };
//   return (
//     <Drawer
//       placement="left"
//       isOpen={isOpen}
//       onClose={onClose}
//       size={{ base: "full", sm: "sm" }}
//     >
//       <DrawerContent maxH={window.innerHeight}>
//         <DrawerCloseButton />
//         <DrawerHeader borderBottom={"1px solid #939292"}>
//           Clothing Store
//         </DrawerHeader>
//         <DrawerBody justifyContent={"center"} alignItems={"center"}>
//           <Flex
//             flexDir={"column"}
//             h={"full"}
//             justify={"center"}
//             align={"center"}
//             gap={4}
//           >
//             {menus?.map((menu: any) => {
//               return (
//                 <Link
//                   onClick={onClose}
//                   _hover={{ textDecor: "none" }}
//                   as={NavLink}
//                   to={
//                     menu.category_slug
//                       ? `/${menu.category_slug}/${menu.slug}`
//                       : `${menu.slug}`
//                   }
//                   key={menu.id}
//                   _activeLink={{ color: "primary.500", fontWeight: 600 }}
//                   fontSize={{
//                     base: "18px",
//                     sm: "20px",
//                     md: "18px",
//                     lg: "20px"
//                   }}
//                 >
//                   {menu.title}
//                 </Link>
//               );
//             })}
//           </Flex>
//         </DrawerBody>
//         <DrawerFooter
//           display={"flex"}
//           justifyContent={"space-between"}
//           borderTop={"1px solid #939292"}
//         >
//           <Link as={NavLink} to={"/"} onClick={onClose}>
//             <Icon as={BiHome} boxSize={6} />
//           </Link>
//           <Link as={NavLink} to={"/profile/"} onClick={onClose}>
//             <Avatar
//               cursor={"pointer"}
//               src={data?.image ? `${data?.image}` : NoImage}
//               boxSize={6}
//               loading="lazy"
//             />
//           </Link>
//         </DrawerFooter>
//       </DrawerContent>
//     </Drawer>
//   );
// };

// export default MobileNav;
