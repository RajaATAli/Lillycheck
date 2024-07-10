import React from 'react';

const TaskRow = ({ task, onDelete, onMarkComplete }) => {
    return (
        <tr className="fw-normal">
            <th>
                <img src={task.avatarUrl} alt="avatar" style={{ width: "45px" }} />
                <span className="ms-2">{task.memberName}</span>
            </th>
            <td className="align-middle"><span>{task.description}</span></td>
            <td className="align-middle">
                <h6 className="mb-0">
                    <span className={`badge ${task.priority === 'High' ? 'bg-danger' : 'bg-success'}`}>{task.priority} priority</span>
                </h6>
            </td>
            <td className="align-middle">
                <i className="fas fa-check fa-lg text-success me-3" onClick={() => onMarkComplete(task.id)}></i>
                <i className="fas fa-trash-alt fa-lg text-warning" onClick={() => onDelete(task.id)}></i>
            </td>
        </tr>
    );
};

export default TaskRow;