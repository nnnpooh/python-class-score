import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DataTable from "./DataTable";
import db from "../Data/db";
import { Typography } from "@material-ui/core";

function titleCase(str) {
  return str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
}

function TabComponent({ email }) {
  let db2 = db.find((el) =>
    el["Email Address"] === email.toLowerCase() ? true : false
  );
  let dbAll = db.find((el) => (el["First Name"] === "All" ? true : false));
  let fullName = "";
  let ShownComponent = null;

  if (db2 !== undefined) {
    fullName = titleCase(db2["First Name"] + " " + db2["Last Name"]);
    ShownComponent = (
      <div>
        <Typography variant="h3">{fullName}</Typography>
        <Tabs>
          <TabList>
            <Tab>Overall</Tab>
            <Tab>Midterm</Tab>
            <Tab>Final</Tab>
          </TabList>
          <TabPanel>
            <DataTable type="overall" data={db2} dataall={dbAll}></DataTable>
          </TabPanel>
          <TabPanel>
            <DataTable type="midterm" data={db2} dataall={dbAll}></DataTable>
          </TabPanel>
          <TabPanel>
            <DataTable type="final" data={db2} dataall={dbAll}></DataTable>
          </TabPanel>
        </Tabs>
      </div>
    );
  }

  return ShownComponent;
}

export default TabComponent;
