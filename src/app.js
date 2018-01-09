const usersData = {
    "users":[
      {
        "id":1782974,
        "first_name":"Jim",
        "last_name":"Allen",
        "email":"jimallen@example.com",
        "telephone":"",
        "timezone":"Mountain Time (US & Canada)",
        "has_access_to_all_future_projects":false,
        "is_contractor":false,
        "is_admin":false,
        "is_project_manager":false,
        "can_see_rates":false,
        "can_create_projects":false,
        "can_create_invoices":false,
        "is_active":true,
        "created_at":"2017-06-26T22:34:41Z",
        "updated_at":"2017-06-26T22:34:52Z",
        "weekly_capacity":126000,
        "default_hourly_rate":100.0,
        "cost_rate":50.0,
        "roles":["Developer"],
        "avatar_url":"https://cache.harvestapp.com/assets/profile_images/abraj_albait_towers.png?1498516481"
      },
      {
        "id":1782959,
        "first_name":"Kim",
        "last_name":"Allen",
        "email":"kimallen@example.com",
        "telephone":"",
        "timezone":"Eastern Time (US & Canada)",
        "has_access_to_all_future_projects":true,
        "is_contractor":false,
        "is_admin":false,
        "is_project_manager":true,
        "can_see_rates":false,
        "can_create_projects":false,
        "can_create_invoices":false,
        "is_active":true,
        "created_at":"2017-06-26T22:15:45Z",
        "updated_at":"2017-06-26T22:32:52Z",
        "weekly_capacity":126000,
        "default_hourly_rate":100.0,
        "cost_rate":50.0,
        "roles":["Designer"],
        "avatar_url":"https://cache.harvestapp.com/assets/profile_images/cornell_clock_tower.png?1498515345"
      },
      {
        "id":1782884,
        "first_name":"Bob",
        "last_name":"Powell",
        "email":"bobpowell@example.com",
        "telephone":"",
        "timezone":"Mountain Time (US & Canada)",
        "has_access_to_all_future_projects":false,
        "is_contractor":false,
        "is_admin":true,
        "is_project_manager":false,
        "can_see_rates":true,
        "can_create_projects":true,
        "can_create_invoices":true,
        "is_active":true,
        "created_at":"2017-06-26T20:41:00Z",
        "updated_at":"2017-06-26T20:42:25Z",
        "weekly_capacity":126000,
        "default_hourly_rate":100.0,
        "cost_rate":75.0,
        "roles":["Founder", "CEO"],
        "avatar_url":"https://cache.harvestapp.com/assets/profile_images/allen_bradley_clock_tower.png?1498509661"
      }
    ],
    "per_page":100,
    "total_pages":1,
    "total_entries":3,
    "next_page":null,
    "previous_page":null,
    "page":1,
    "links":{
      "first":"https://api.harvestapp.com/v2/users?page=1&per_page=100",
      "next":null,
      "previous":null,
      "last":"https://api.harvestapp.com/v2/users?page=1&per_page=100"
    }
}

const timeData = {
  "time_entries":[
    {
      "id":636709355,
      "spent_date":"2017-03-02",
      "user":{
        "id":1782959,
        "name":"Kim Allen"
      },
      "client":{
        "id":5735774,
        "name":"ABC Corp"
      },
      "project":{
        "id":14307913,
        "name":"Marketing Website"
      },
      "task":{
        "id":8083365,
        "name":"Graphic Design"
      },
      "user_assignment":{
        "id":125068553,
        "is_project_manager":true,
        "is_active":true,
        "budget":null,
        "created_at":"2017-06-26T22:32:52Z",
        "updated_at":"2017-06-26T22:32:52Z",
        "hourly_rate":100.0
      },
      "task_assignment":{
        "id":155502709,
        "billable":true,
        "is_active":true,
        "created_at":"2017-06-26T21:36:23Z",
        "updated_at":"2017-06-26T21:36:23Z",
        "hourly_rate":100.0,
        "budget":null
      },
      "hours":2.0,
      "notes":"Adding CSS styling",
      "created_at":"2017-06-27T15:50:15Z",
      "updated_at":"2017-06-27T16:47:14Z",
      "is_locked":true,
      "locked_reason":"Item Approved and Locked for this Time Period",
      "is_closed":true,
      "is_billed":false,
      "timer_started_at":null,
      "started_time":"3:00pm",
      "ended_time":"5:00pm",
      "is_running":false,
      "invoice":null,
      "external_reference":null,
      "billable":true,
      "budgeted":true,
      "billable_rate":100.0,
      "cost_rate":50.0
    },
    {
      "id":636708723,
      "spent_date":"2017-03-01",
      "user":{
        "id":1782959,
        "name":"Kim Allen"
      },
      "client":{
        "id":5735776,
        "name":"123 Industries"
      },
      "project":{
        "id":14308069,
        "name":"Online Store - Phase 1"
      },
      "task":{
        "id":8083366,
        "name":"Programming"
      },
      "user_assignment":{
        "id":125068554,
        "is_project_manager":true,
        "is_active":true,
        "budget":null,
        "created_at":"2017-06-26T22:32:52Z",
        "updated_at":"2017-06-26T22:32:52Z",
        "hourly_rate":100.0
      },
      "task_assignment":{
        "id":155505014,
        "billable":true,
        "is_active":true,
        "created_at":"2017-06-26T21:52:18Z",
        "updated_at":"2017-06-26T21:52:18Z",
        "hourly_rate":100.0,
        "budget":null
      },
      "hours":1.0,
      "notes":"Importing products",
      "created_at":"2017-06-27T15:49:28Z",
      "updated_at":"2017-06-27T16:47:14Z",
      "is_locked":true,
      "locked_reason":"Item Invoiced and Approved and Locked for this Time Period",
      "is_closed":true,
      "is_billed":true,
      "timer_started_at":null,
      "started_time":"1:00pm",
      "ended_time":"2:00pm",
      "is_running":false,
      "invoice":{
        "id":13150403,
        "number":"1001"
      },
      "external_reference":null,
      "billable":true,
      "budgeted":true,
      "billable_rate":100.0,
      "cost_rate":50.0
    },
    {
      "id":636708574,
      "spent_date":"2017-03-01",
      "user":{
        "id":1782959,
        "name":"Kim Allen"
      },
      "client":{
        "id":5735776,
        "name":"123 Industries"
      },
      "project":{
        "id":14308069,
        "name":"Online Store - Phase 1"
      },
      "task":{
        "id":8083369,
        "name":"Research"
      },
      "user_assignment":{
        "id":125068554,
        "is_project_manager":true,
        "is_active":true,
        "budget":null,
        "created_at":"2017-06-26T22:32:52Z",
        "updated_at":"2017-06-26T22:32:52Z",
        "hourly_rate":100.0
      },
      "task_assignment":{
        "id":155505016,
        "billable":false,
        "is_active":true,
        "created_at":"2017-06-26T21:52:18Z",
        "updated_at":"2017-06-26T21:54:06Z",
        "hourly_rate":100.0,
        "budget":null
      },
      "hours":1.0,
      "notes":"Evaluating 3rd party libraries",
      "created_at":"2017-06-27T15:49:17Z",
      "updated_at":"2017-06-27T16:47:14Z",
      "is_locked":true,
      "locked_reason":"Item Approved and Locked for this Time Period",
      "is_closed":true,
      "is_billed":false,
      "timer_started_at":null,
      "started_time":"11:00am",
      "ended_time":"12:00pm",
      "is_running":false,
      "invoice":null,
      "external_reference":null,
      "billable":false,
      "budgeted":true,
      "billable_rate":null,
      "cost_rate":50.0
    },
    {
      "id":636707831,
      "spent_date":"2017-03-01",
      "user":{
        "id":1782959,
        "name":"Kim Allen"
      },
      "client":{
        "id":5735776,
        "name":"123 Industries"
      },
      "project":{
        "id":14308069,
        "name":"Online Store - Phase 1"
      },
      "task":{
        "id":8083368,
        "name":"Project Management"
      },
      "user_assignment":{
        "id":125068554,
        "is_project_manager":true,
        "is_active":true,
        "budget":null,
        "created_at":"2017-06-26T22:32:52Z",
        "updated_at":"2017-06-26T22:32:52Z",
        "hourly_rate":100.0
      },
      "task_assignment":{
        "id":155505015,
        "billable":true,
        "is_active":true,
        "created_at":"2017-06-26T21:52:18Z",
        "updated_at":"2017-06-26T21:52:18Z",
        "hourly_rate":100.0,
        "budget":null
      },
      "hours":2.0,
      "notes":"Planning meetings",
      "created_at":"2017-06-27T15:48:24Z",
      "updated_at":"2017-06-27T16:47:14Z",
      "is_locked":true,
      "locked_reason":"Item Invoiced and Approved and Locked for this Time Period",
      "is_closed":true,
      "is_billed":true,
      "timer_started_at":null,
      "started_time":"9:00am",
      "ended_time":"11:00am",
      "is_running":false,
      "invoice":{
        "id":13150403,
        "number":"1001"
      },
      "external_reference":null,
      "billable":true,
      "budgeted":true,
      "billable_rate":100.0,
      "cost_rate":50.0
    }
  ],
  "per_page":100,
  "total_pages":1,
  "total_entries":4,
  "next_page":null,
  "previous_page":null,
  "page":1,
  "links":{
    "first":"https://api.harvestapp.com/v2/time_entries?page=1&per_page=100",
    "next":null,
    "previous":null,
    "last":"https://api.harvestapp.com/v2/time_entries?page=1&per_page=100"
  }
}
const possible_users = document.getElementById('possible_users');
const drop_downbutton = document.getElementById('drop_downbutton');
const content_info = document.getElementById('content-info');
let dict = {}

document.addEventListener("DOMContentLoaded", () => {
  // onload fetch all users
  // append user into dropdown onload
  for ( let user of usersData.users ) {
    var node = document.createElement("p");
    var textnode = document.createTextNode( user.first_name + ' ' + user.last_name );
    node.appendChild(textnode);
    node.addEventListener("click", populatePage );
    possible_users.appendChild(node);   
  }

});

const populatePage = () => { 

    orderedByDate();

    for ( let _date in dict ) { 
        const date_and_sum = document.createElement("div");
        date_and_sum.className = "date-and-hours";
        let totalHours = 0;
        
        appendNewEle(date_and_sum, 'p', _date, 'content-header-date');
        appendNewEle(date_and_sum, 'p', totalHours, 'content-header-hours');
        
        content_info.appendChild(date_and_sum);

        for ( let project of dict[_date] ) {
          const node_wrapper = document.createElement("div");
          node_wrapper.className = "content-data";
          totalHours += project.hours;
          
          const filtedData = [
            project.client.name,
            project.project.name,
            project.task.name,
            "Role ???",
            project.user.name,
            project.hours
          ]
          
          for ( let _data of filtedData ) {
            appendNewEle(node_wrapper, 'p', _data)
          }
          
          content_info.appendChild(node_wrapper);    
        }
    }
}
// create p-tag ele to add to parent ele
const appendNewEle = (_parentEle, _eleTag = 'p', _text, _className = 'none') => {
    var newPtagEle = document.createElement( _eleTag );
    if ( _className != 'none' ) {
      newPtagEle.className = _className;
    }
    var textnode = document.createTextNode( _text );
    newPtagEle.appendChild(textnode);
    _parentEle.appendChild(newPtagEle);
}
// sort obj by key
function sortObject(o) {
    return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
}

const orderedByDate = () => {
    // group project by date
    for ( let entrie of timeData.time_entries ) {
        if ( dict[entrie.spent_date] ) {
            dict[entrie.spent_date].push(entrie);
        } else {
            dict[entrie.spent_date] = [entrie];
        }
    }
    // sort obj by date(key) 
    dict = sortObject(dict);
}