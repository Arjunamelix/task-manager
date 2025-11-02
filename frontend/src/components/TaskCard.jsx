import React from 'react';

function TaskCard({ task, onEdit, onDelete }) {
  // Status styling
  const getStatusStyle = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Priority styling
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500 text-white';
      case 'medium':
        return 'bg-orange-500 text-white';
      case 'low':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  // Category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'work':
        return '💼';
      case 'personal':
        return '👤';
      case 'urgent':
        return '🚨';
      default:
        return '📌';
    }
  };

  // Format date
  const formatDate = (date) => {
    if (!date) return 'No deadline';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-5 border-l-4 border-blue-500">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-gray-800 flex-1 pr-2">
          {task.title}
        </h3>
        <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityStyle(task.priority)}`}>
          {task.priority.toUpperCase()}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {task.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(task.status)}`}>
          {task.status.replace('-', ' ').toUpperCase()}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
          {getCategoryIcon(task.category)} {task.category.toUpperCase()}
        </span>
      </div>

      {/* Deadline */}
      <div className="text-sm text-gray-500 mb-4 flex items-center">
        <span className="mr-2">📅</span>
        <span>{formatDate(task.deadline)}</span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-3 border-t border-gray-200">
        <button
          onClick={() => onEdit(task)}
          className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition font-medium text-sm"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="flex-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition font-medium text-sm"
        >
          🗑️ Delete
        </button>
      </div>

      {/* Created date */}
      <div className="text-xs text-gray-400 mt-3 text-center">
        Created: {formatDate(task.createdAt)}
      </div>
    </div>
  );
}

export default TaskCard;