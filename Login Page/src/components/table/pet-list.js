import React from 'react'
import {Link} from "react-router-dom";


class PostTable extends React.Component{
    constructor(props) {
        super(props);
        // console.log(props)
    }

    render() {
        return(
            <div>
                <table className="table table-striped">
                    <thead>
                    <h1>Post Table</h1>
                        <Link to="/profile">
                            Back to Previous
                        </Link>
                    {/*<button onClick={this.addPost}>*/}
                    {/*    Add Post*/}
                    {/*</button>*/}
                    {/*<button onClick={this.deletePost}>*/}
                    {/*    Delete Post*/}
                    {/*</button>*/}
                    {/*<button onClick={this.updatePost}>*/}
                    {/*    Update Post*/}
                    {/*</button>*/}
                    </thead>

                    <tbody>
                    <tr>
                        <td scope="col" style={{fontWeight: 'bold'}}>Title</td>
                        <td className="d-none d-sm-table-cell" scope="col" style={{fontWeight: 'bold'}}>Owner</td>
                        <td className="d-none d-md-table-cell" scope="col" style={{fontWeight: 'bold'}}>Last Modified</td>
                        <td>
                            {/*<i className="fas fa-folder mr-1"></i>*/}
                            {/*<i className="fas fa-filter mr-1"></i>*/}
                            {/*<Link to="/post/grid">*/}
                            {/*    <i className="fas fa-th text-dark"></i>*/}
                            {/*</Link>*/}
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">
                            <Link to="/post/grid">
                            Found Corgi(Almond color) at Church
                            </Link>
                        </th>
                        <td>Mark</td>
                        <td>01/18/2021</td>
                        <td><i className="fas fa-edit"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">Missing Pet</th>
                        <td>Jacob</td>
                        <td>01/18/2021</td>
                        <td><i className="fas fa-edit"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">2yr dog looking for home</th>
                        <td>Larry</td>
                        <td>01/18/2021</td>
                        <td><i className="fas fa-edit"></i></td>
                    </tr>

                    <tr>
                        <th scope="row">White Chiwawa Looking for home</th>
                        <td>Sarry</td>
                        <td>01/18/2021</td>
                        <td><i className="fas fa-edit"></i></td>
                    </tr>


                    {/*<CourseRow title="CS5610" owner="me"/>*/}
                    {/*<CourseRow title="CS4610" owner="you"/>*/}
                    {/*<CourseRow title="CS3610" owner="him"/>*/}
                    {/*<CourseRow title="CS2610" owner="she"/>*/}
                    {/*{*/}
                    {/*    this.props.course.map((course,ndx) =>*/}
                    {/*        <PostRow*/}
                    {/*            updateCourse={this.props.updateCourse}*/}
                    {/*            deleteCourse={this.props.deleteCourse}*/}
                    {/*            key = {ndx}*/}
                    {/*            course={course}*/}
                    {/*            title={course.title}*/}
                    {/*            lastModified={course.lastModified}*/}
                    {/*            owner={course.owner}/>)*/}
                    {/*}*/}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default PostTable