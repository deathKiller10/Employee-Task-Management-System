const employees = [
    {
        "id": 1,
        "firstName": "Rajesh",
        "email": "rajesh@e.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "complete": false,
                "failed": false,
                "taskTitle": "Prepare Monthly Report",
                "taskDescription": "Prepare the sales and performance report for the month.",
                "taskDate": "2024-10-20",
                "taskCategory": "Reports"
            },
            {
                "active": false,
                "newTask": true,
                "complete": false,
                "failed": false,
                "taskTitle": "Client Meeting Preparation",
                "taskDescription": "Gather necessary data for the upcoming client meeting.",
                "taskDate": "2024-10-22",
                "taskCategory": "Meetings"
            },
            {
                "active": false,
                "newTask": false,
                "complete": true,
                "failed": false,
                "taskTitle": "Inventory Check",
                "taskDescription": "Perform a quarterly check on all company inventories.",
                "taskDate": "2024-09-15",
                "taskCategory": "Operations"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "complete": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "sneha@e.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "complete": false,
                "failed": false,
                "taskTitle": "Onboard New Team Member",
                "taskDescription": "Assist HR with onboarding a new software engineer.",
                "taskDate": "2024-10-18",
                "taskCategory": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "complete": true,
                "failed": false,
                "taskTitle": "System Upgrade",
                "taskDescription": "Complete the upgrade for the server systems.",
                "taskDate": "2024-09-30",
                "taskCategory": "IT"
            },
            {
                "active": false,
                "newTask": false,
                "complete": false,
                "failed": true,
                "taskTitle": "Security Audit",
                "taskDescription": "Perform a security audit on the company’s internal systems.",
                "taskDate": "2024-10-25",
                "taskCategory": "Security"
            },
            {
                "active": false,
                "newTask": false,
                "complete": true,
                "failed": false,
                "taskTitle": "Cyber Security Audit",
                "taskDescription": "Perform a security audit on the company’s servers and firewalls.",
                "taskDate": "2024-10-11",
                "taskCategory": "Cyber Security"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 0,
            "complete": 2,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstName": "Anjali",
        "email": "anjali@e.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "complete": false,
                "failed": false,
                "taskTitle": "Team Building Event",
                "taskDescription": "Organize a team building activity for the product development team.",
                "taskDate": "2024-11-01",
                "taskCategory": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "complete": true,
                "failed": false,
                "taskTitle": "Bug Fix",
                "taskDescription": "Fix a critical bug in the customer feedback portal.",
                "taskDate": "2024-10-10",
                "taskCategory": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "complete": false,
                "failed": true,
                "taskTitle": "App Feature Development",
                "taskDescription": "Develop a new feature for the mobile app.",
                "taskDate": "2024-10-28",
                "taskCategory": "Development"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 0,
            "complete": 1,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstName": "Vikram",
        "email": "vikram@e.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "complete": false,
                "failed": false,
                "taskTitle": "Customer Feedback Collection",
                "taskDescription": "Collect feedback from customers about the recent product update.",
                "taskDate": "2024-10-21",
                "taskCategory": "Customer Support"
            },
            {
                "active": false,
                "newTask": false,
                "complete": true,
                "failed": false,
                "taskTitle": "Website Redesign",
                "taskDescription": "Redesign the landing page of the corporate website.",
                "taskDate": "2024-09-25",
                "taskCategory": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "complete": false,
                "failed": true,
                "taskTitle": "Database Backup",
                "taskDescription": "Perform a full backup of the company's database.",
                "taskDate": "2024-10-27",
                "taskCategory": "IT"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 0,
            "complete": 1,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstName": "Priya",
        "email": "priya@e.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "complete": false,
                "failed": false,
                "taskTitle": "Market Research",
                "taskDescription": "Conduct research on potential new markets in Asia.",
                "taskDate": "2024-11-05",
                "taskCategory": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "complete": true,
                "failed": false,
                "taskTitle": "Internal Training",
                "taskDescription": "Provide training on the new project management tool.",
                "taskDate": "2024-10-03",
                "taskCategory": "Training"
            },
            {
                "active": false,
                "newTask": false,
                "complete": false,
                "failed": true,
                "taskTitle": "Social Media Strategy",
                "taskDescription": "Develop a social media strategy for the upcoming product launch.",
                "taskDate": "2024-10-30",
                "taskCategory": "Marketing"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 0,
            "complete": 1,
            "failed": 1
        }
    }
]

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]


export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return {employees, admin}
}