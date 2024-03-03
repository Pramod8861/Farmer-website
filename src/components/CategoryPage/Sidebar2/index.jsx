import React from "react";
import { Text, Img } from "./../../CCindex";
import { SubMenu, MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar2({ ...props }) {
  return (
    <Sidebar {...props} width="250px !important">
      <Img src="images/img_group_18298.svg" alt="image" className="h-[30px] mt-6 ml-7 mr-[97px]" />
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            margin: " ",
          },
        }}
        renderExpandIcon={() => (
          <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-6 w-6 cursor-pointer" />
        )}
        className="flex flex-col items-center justify-start w-full mt-[76px]"
      >
        <div className="flex flex-row justify-start items-center w-full gap-2 p-2.5">
          <Img src="images/img_circlesfour_blue_gray_400.svg" alt="image_one" className="h-5 w-5 ml-5" />
          <Text as="p">Dashboard</Text>
        </div>
        <SubMenu>
          <div className="flex flex-row justify-between items-center w-full p-[7px]">
            <div className="flex flex-row justify-start items-center ml-[23px] gap-2">
              <Img src="images/img_frame_17.svg" alt="rocketlaunch" className="h-4 w-4" />
              <Text as="p">Orders</Text>
            </div>
          </div>
        </SubMenu>
        <SubMenu>
          <div className="flex flex-row justify-between items-start w-full pb-2.5 px-2.5">
            <div className="flex flex-row justify-start items-center mt-2.5 ml-[19px] gap-2">
              <Img src="images/img_group_2.svg" alt="image_two" className="h-4 w-4" />
              <Text as="p" className="!text-blue-A200">
                Menus
              </Text>
            </div>
            <div className="h-6 w-6 mb-2.5 mr-6 rotate-[90deg]" />
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row justify-start w-full p-2.5">
              <Text as="p" className="ml-[43px]">
                Add Menu
              </Text>
            </div>
            <div className="flex flex-row justify-start w-full p-2.5">
              <Text as="p" className="ml-[43px] !text-blue-A200">
                Menu List
              </Text>
            </div>
            <div className="flex flex-row justify-start w-full p-2.5">
              <Text as="p" className="ml-[43px]">
                Categories
              </Text>
            </div>
          </div>
        </SubMenu>
        <SubMenu>
          <div className="flex flex-row justify-between items-start w-full pb-2.5 px-2.5">
            <div className="flex flex-row justify-start items-center mt-2.5 ml-[19px] gap-2">
              <Img src="images/img_frame_19.svg" alt="vector_one" className="h-4 w-4" />
              <Text as="p">Customer</Text>
            </div>
            <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-6 w-6 mb-[5px] cursor-pointer" />
          </div>
        </SubMenu>
        <div className="flex flex-row justify-start items-center w-full gap-2 p-2.5">
          <Img src="images/img_frame_20.svg" alt="vector_three" className="h-4 w-4 ml-[19px]" />
          <Text as="p">Analytics</Text>
        </div>
        <SubMenu>
          <div className="flex flex-row justify-between items-start w-full pt-2.5 px-2.5">
            <div className="flex flex-row justify-start items-center ml-[19px] gap-2">
              <Img src="images/img_frame_21.svg" alt="image_three" className="h-4 w-4" />
              <Text as="p">Table </Text>
            </div>
            <Img src="images/img_arrow_right.svg" alt="arrowright_five" className="h-6 w-6 mt-[13px] cursor-pointer" />
          </div>
        </SubMenu>
      </Menu>
      <div className="flex flex-col items-start justify-start w-full mt-[146px] mb-[84px] mx-auto max-w-[189px]">
        <Img src="images/defaultNoData.png" alt="image_four" className="w-full object-cover" />
        <Text size="s" as="p" className="mt-[23px] ml-px !text-gray-700_01">
          Bistro Restaurant Admin{" "}
        </Text>
        <Text size="xs" as="p" className="mt-1.5 ml-px !text-gray-700_01">
          2021 All Rights
        </Text>
        <div className="flex flex-row justify-start mt-[5px] gap-0.5">
          <Text size="xs" as="p" className="!text-gray-700_01">
            Made with
          </Text>
          <Img src="images/img_heart.svg" alt="heart_one" className="h-3" />
          <Text size="xs" as="p" className="!text-gray-700_01">
            by Bistro
          </Text>
        </div>
      </div>
    </Sidebar>
  );
}
