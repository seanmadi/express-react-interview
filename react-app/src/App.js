import React, { useEffect, useState } from 'react';
import Device from "./Device.js"
import moment from "moment"

function App() {
  let [devices, setDevices] = useState({})

  let getDevices = async () => {
    let response = await fetch('http://localhost:3000/devices?product_code=FOZ');
    let jsonResponse = await response.json();
    setDevices(jsonResponse)
  }

  useEffect(() => {
    getDevices()
  }, [])

  let onRemove = (id) => {
    const { [id]: value, ...newDevices } = devices;
    setDevices(newDevices)
  }

  let renderRows = () => {
    return Object.keys(devices)
      .sort((a, b) => moment(devices[b].event_date_terminated, 'YYYY-MM-DD').diff(moment(devices[a].event_date_terminated, 'YYYY-MM-DD')))
      .map((key) => {
        const device = devices[key];
        // Ensure openfda exists before trying to reach into device_name
        const deviceName = device.openfda ? device.openfda.device_name : "";

        return (
          <Device
            key={device.res_event_number}
            id={device.res_event_number}
            name={deviceName}
            dateTerminated={device.event_date_terminated}
            onRemove={onRemove}
          />
        )
    })
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Device Name</th>
          <th>Date Terminated</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
}

export default App;
