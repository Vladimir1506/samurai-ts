import React from 'react';
import User from './User';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import PagerPageNumber from './PagerPageNumber';


// const Users = (props: UsersPropsType) => {
//     const getUsers = () => {
//         !props.users.length && axios.get('https://social-network.samuraijs.com/api/1.0/users').then((data: any) => {
//                 props.setUsers(data.data.items)
//                 debugger
//             }
//         )
//     }
//     // props.setUsers([
//     //     {
//     //         id: '1',
//     //         name: 'Nicole',
//     //         avatar: 'https://i.pinimg.com/564x/63/44/c5/6344c5dc8d8ef20c8e235051e5e8e083.jpg',
//     //         followed: true,
//     //         address: {
//     //             country: 'PMR',
//     //             city: 'Rybnitsa'
//     //         }
//     //     },
//     //     {
//     //         id: '2',
//     //         name: 'Michael',
//     //         avatar: 'https://avatars.mds.yandex.net/i?id=c9f9c187495262f34d011704fbc7af4086f7b067-8199736-images-thumbs&n=13',
//     //         followed: false,
//     //         address: {
//     //             country: 'PMR',
//     //             city: 'Tiraspol'
//     //         }
//     //     },
//     // ])
//     const mappedUsers = props.users.map(user => <User
//         user={user}
//         follow={props.follow}
//         unfollow={props.unfollow}
//         key={user.id}/>)
//     return <div>
//         <button onClick={getUsers}>Get users</button>
//         {mappedUsers}</div>
// };

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((data: any) => {
            this.props.setUsers(data.data.items)
            this.props.setTotalUsersCount(data.data.totalCount)
        })
    }

    render() {
        const currentPage = this.props.currentPage

        const mappedUsers = this.props.users.map((user, index) => <User
            user={user}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            key={index}/>)
        const totalPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: number[] = []
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            (i > 0) && (i <= totalPages) && pages.push(i)
        }
        const firstPage = (<>
            <PagerPageNumber pageNumber={1}
                             currentPage={currentPage}
                             pageSize={this.props.pageSize}
                             setCurrentPage={this.props.setCurrentPage}
                             setUsers={this.props.setUsers}
            />
            <span>...</span>
        </>)
        const lastPage = (<>
            <span>...</span>
            <PagerPageNumber pageNumber={totalPages} currentPage={currentPage}
                             pageSize={this.props.pageSize}
                             setCurrentPage={this.props.setCurrentPage}
                             setUsers={this.props.setUsers}/>
        </>)
        const mappedPages = pages.map((page, index) => {
            return (<PagerPageNumber key={index}
                                     pageNumber={page}
                                     currentPage={this.props.currentPage}
                                     pageSize={this.props.pageSize}
                                     setCurrentPage={this.props.setCurrentPage}
                                     setUsers={this.props.setUsers}/>)

        })

        return <div>
            {(currentPage > 3) && firstPage}
            {mappedPages}
            {(currentPage < totalPages - 2) && lastPage}
            {mappedUsers}
        </div>
    }
}

export default Users;