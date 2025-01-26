
const data=[
    {
        "id": 1,
        "name": "Amit Sharma",
        "email": "amit.sharma@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 1",
                "description": "Complete the project documentation.",
                "date": "2024-12-01",
                "category": "Documentation"
            },
            {
                "active": false,
                "completed": true,
                "failed": false,
                "new": false,
                "title": "Task 2",
                "description": "Attend the team meeting.",
                "date": "2024-12-02",
                "category": "Meeting"
            },
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 3",
                "description": "Review the codebase.",
                "date": "2024-12-03",
                "category": "Code Review"
            }
        ],
        "taskCount": {
            "active": 2,
            "completed": 1,
            "failed": 0,
            "new": 2
        }
    },
    {
        "id": 2,
        "name": "Priya Singh",
        "email": "priya.singh@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 1",
                "description": "Design the new logo.",
                "date": "2024-12-01",
                "category": "Design"
            },
            {
                "active": false,
                "completed": true,
                "failed": false,
                "new": false,
                "title": "Task 2",
                "description": "Create a presentation.",
                "date": "2024-12-02",
                "category": "Presentation"
            },
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 3",
                "description": "Update the website layout.",
                "date": "2024-12-03",
                "category": "Web Design"
            },
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 4",
                "description": "Prepare the design mockups.",
                "date": "2024-12-04",
                "category": "Design"
            }
        ],
        "taskCount": {
            "active": 3,
            "completed": 1,
            "failed": 0,
            "new": 3
        }
    },
    {
        "id": 3,
        "name": "Rahul Verma",
        "email": "rahul.verma@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 1",
                "description": "Plan the marketing campaign.",
                "date": "2024-12-01",
                "category": "Marketing"
            },
            {
                "active": false,
                "completed": true,
                "failed": false,
                "new": false,
                "title": "Task 2",
                "description": "Analyze market trends.",
                "date": "2024-12-02",
                "category": "Analysis"
            },
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 3",
                "description": "Coordinate with the sales team.",
                "date": "2024-12-03",
                "category": "Coordination"
            },
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 4",
                "description": "Prepare the marketing budget.",
                "date": "2024-12-04",
                "category": "Budgeting"
            },
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 5",
                "description": "Review the marketing materials.",
                "date": "2024-12-05",
                "category": "Review"
            }
        ],
        "taskCount": {
            "active": 4,
            "completed": 1,
            "failed": 0,
            "new": 4
        }
    },
    {
        "id": 4,
        "name": "Sneha Patel",
        "email": "sneha.patel@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 1",
                "description": "Analyze the sales data.",
                "date": "2024-12-01",
                "category": "Data Analysis"
            },
            {
                "active": false,
                "completed": true,
                "failed": false,
                "new": false,
                "title": "Task 2",
                "description": "Prepare the monthly report.",
                "date": "2024-12-02",
                "category": "Reporting"
            },
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 3",
                "description": "Update the data dashboard.",
                "date": "2024-12-03",
                "category": "Dashboard"
            }
        ],
        "taskCount": {
            "active": 2,
            "completed": 1,
            "failed": 0,
            "new": 2
        }
    },
    {
        "id": 5,
        "name": "Vikram Rao",
        "email": "vikram.rao@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 1",
                "description": "Conduct patient consultations.",
                "date": "2024-12-01",
                "category": "Consultation"
            },
            {
                "active": false,
                "completed": false,
                "failed": false,
                "new": false,
                "title": "Task 2",
                "description": "Review medical records.",
                "date": "2024-12-02",
                "category": "Review"
            },
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 3",
                "description": "Update patient treatment plans.",
                "date": "2024-12-03",
                "category": "Treatment"
            },
            {
                "active": true,
                "completed": false,
                "failed": true,
                "new": true,
                "title": "Task 4",
                "description": "Attend medical conference.",
                "date": "2024-12-04",
                "category": "Conference"
            },
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 5",
                "description": "Prepare medical reports.",
                "date": "2024-12-05",
                "category": "Reporting"
            },
            {
                "active": true,
                "completed": false,
                "failed": false,
                "new": true,
                "title": "Task 6",
                "description": "Conduct follow-up appointments.",
                "date": "2024-12-06",
                "category": "Follow-up"
            }
        ],
        "taskCount": {
            "active": 5,
            "completed": 0,
            "failed": 1,
            "new": 5
        }
    }
];

    const admin= [{
        "id": 1,
        "name": "Admin User",
        "email": "admin.user@example.com",
        "password": "123"

    }];

export function setLocalStorage()
{
    localStorage.setItem("employees", JSON.stringify(data));
    localStorage.setItem("admin", JSON.stringify(admin));
}
export function getLocalStorage()
{
   const employees= JSON.parse(localStorage.getItem("employees"));
   const admin= JSON.parse(localStorage.getItem("admin"));
    return{employees,admin }
}
