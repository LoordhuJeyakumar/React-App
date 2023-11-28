# React User Management App - CRUD

### Task Details

Design an UI to implement the CRUD

- // CRUD - Create,Read,Update,Delete
- // Dashboard
- // List Users - /users
- // Create User - /create-user
- // Edit User - /edit-user/:id
- // profile - /profile/:id
- // edit-profile – /edit-profile/:id

### Total Components

> Components

- [Main](./src/main.jsx)
- [App](./src/App.jsx)
- [NavComponent](./src/components/NavComponent.jsx)
- [Dashboard](./src/components/Dashboard.jsx)
- [CreateUser](./src/components/CreateUser.jsx)
- [UserForm](./src/components/UserForm.jsx)
- [AllUsers](./src/components/AllUsers.jsx)
- [ViewUserModal](./src/components/ViewUserModal.jsx)
- [EditUsers](./src/components/EditUsers.jsx)
- [EditUserModal](./src/components/EditUserModal.jsx)
- [DeleteUsers](./src/components/DeleteUsers.jsx)
- [DeleteUsersModal](./src/components/DeleteUsersModal.jsx)
- [ActionButton](./src/components/ActionButton.jsx)
- [DataPerPage](./src/components/DataPerPage.jsx)
- [InputDataList](./src/components/InputDataList.jsx)
- [Pagination](./src/components/Pagination.jsx)
- [Table](./src/components/Table.jsx)
- [Table](./src/components/)
  > Reducer
- [FormReducer](./src/reducers/FormReducer.jsx)
  > DataBase
- [db](./db.json)

### This User Management App Have Below Components hierarchy structure

- [App](./src/App.jsx)

  - [Nav Component](./src/components/NavComponent.jsx)

    - [All Users](./src//components/AllUsers.jsx)

      - [DataPerPage](./src//components/DataPerPage.jsx)
      - [InputDataList](./src//components/InputDataList.jsx)
      - [Pagination](./src//components/Pagination.jsx)
      - [Table](./src/components/Table.jsx)
        - [ActionButton](./src//components/ActionButton.jsx)
          - [ViewUserModal](./src/components/ViewUserModal.jsx)

    - [Create Users](./src//components/CreateUser.jsx)
      - [UserForm](./src/components/UserForm.jsx)
    - [Edit Users](./src//components/EditUsers.jsx)
      - [DataPerPage](./src//components/DataPerPage.jsx)
      - [InputDataList](./src//components/InputDataList.jsx)
      - [Pagination](./src//components/Pagination.jsx)
      - [Table](./src/components/Table.jsx)
        - [ActionButton](./src//components/ActionButton.jsx)
          - [EditUserModal](./src/components/EditUserModal.jsx)
            - [User Form Update Type](./src/components/UserForm.jsx)
    - [Delete Users](./src//components/DeleteUsers.jsx)
      - [DataPerPage](./src//components/DataPerPage.jsx)
      - [InputDataList](./src//components/InputDataList.jsx)
      - [DeleteUserModal](./src/components/DeleteUsersModal.jsx)

  ### Branch Name [user-management](https://github.com/LoordhuJeyakumar/React-App/tree/user-management)

  ### Github source URL [Click Here](https://github.com/LoordhuJeyakumar/React-App/tree/user-management/src)

  ### Netlify Deployed URL [Click Here](https://user-management-react-crud.netlify.app/)

  ### BackEnd Deployed URL [Click Here](https://usermanagement-api.onrender.com/usersDetails/)
