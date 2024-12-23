import Sidebar from "@/components/fragments/sidebar";
import React from "react";
import styles from "./AdminLayout.module.scss";
import Appbar from "@/components/fragments/appbar";

type Proptypes = {
  children: React.ReactNode;
};

const listSidebarItems = [
  {
    title: "Home",
    url: "/admin",
    ref: "/admin",
    icon: "bxs-dashboard",
  },
  {
    title: "Users",
    url: "/admin/users",
    ref: "/admin/users",
    icon: "bxs-group",
  },
];
const AdminLayout = (props: Proptypes) => {
  const { children } = props;
  return (
    <div className={styles.admin}>
      <Sidebar list={listSidebarItems} />
      <div className={styles.admin__content}>
        <Appbar />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
