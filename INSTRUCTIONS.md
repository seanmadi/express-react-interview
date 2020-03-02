## Interview Instructions

### Express

1. In the existing `/devices` GET request, request data from this endpoint [https://api.fda.gov/device/recall.json?search=product_code:FOZ&limit=5](https://api.fda.gov/device/recall.json?search=product_code:FOZ&limit=5) and assign the `results` data to a variable as a single object, where each property's key is a result's `res_event_number`. Render out the object as the body for the `/devices` GET request.

    ```javascript
    // example
    {
      "47369": {
        "other_submission_description": ...,
        "res_event_number": "47369",
        "firm_fei_number": ...,
        ...,
      },
      ...,
    }
    ```

2. Take `product_code` as a request query parameter, and use that in the request to fda.gov. EX: `http://localhost:3000/devices?product_code=FOZ`

### React

1. Request data from the express endpoint you created (`http://localhost:3000/devices?product_code=FOZ`) and store the results in state.

2. Render a table with the columns *Device Name* and *Date Terminated*, with the data as `openfda.device_name` and `event_date_terminated`, respectively.

3. Move each row into it's own component called `Device`.

4. Add another column to the table with nothing in the table head (blank). Add a **delete** button to each row, and have clicking that button remove that row from the table (remove that device from the state).

5. Sort the Devices by `date_terminated` (assume that sorting alphabetically will not accomplish this)
