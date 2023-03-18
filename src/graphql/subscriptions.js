/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateIssueInfo = /* GraphQL */ `
  subscription OnCreateIssueInfo(
    $filter: ModelSubscriptionIssueInfoFilterInput
  ) {
    onCreateIssueInfo(filter: $filter) {
      id
      issueId
      issueTitle
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateIssueInfo = /* GraphQL */ `
  subscription OnUpdateIssueInfo(
    $filter: ModelSubscriptionIssueInfoFilterInput
  ) {
    onUpdateIssueInfo(filter: $filter) {
      id
      issueId
      issueTitle
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteIssueInfo = /* GraphQL */ `
  subscription OnDeleteIssueInfo(
    $filter: ModelSubscriptionIssueInfoFilterInput
  ) {
    onDeleteIssueInfo(filter: $filter) {
      id
      issueId
      issueTitle
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuestionBank = /* GraphQL */ `
  subscription OnCreateQuestionBank(
    $filter: ModelSubscriptionQuestionBankFilterInput
  ) {
    onCreateQuestionBank(filter: $filter) {
      id
      issueId
      questionId
      questionStr
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuestionBank = /* GraphQL */ `
  subscription OnUpdateQuestionBank(
    $filter: ModelSubscriptionQuestionBankFilterInput
  ) {
    onUpdateQuestionBank(filter: $filter) {
      id
      issueId
      questionId
      questionStr
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuestionBank = /* GraphQL */ `
  subscription OnDeleteQuestionBank(
    $filter: ModelSubscriptionQuestionBankFilterInput
  ) {
    onDeleteQuestionBank(filter: $filter) {
      id
      issueId
      questionId
      questionStr
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSurveyResponse = /* GraphQL */ `
  subscription OnCreateSurveyResponse(
    $filter: ModelSubscriptionSurveyResponseFilterInput
  ) {
    onCreateSurveyResponse(filter: $filter) {
      id
      userId
      questionId
      response
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSurveyResponse = /* GraphQL */ `
  subscription OnUpdateSurveyResponse(
    $filter: ModelSubscriptionSurveyResponseFilterInput
  ) {
    onUpdateSurveyResponse(filter: $filter) {
      id
      userId
      questionId
      response
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSurveyResponse = /* GraphQL */ `
  subscription OnDeleteSurveyResponse(
    $filter: ModelSubscriptionSurveyResponseFilterInput
  ) {
    onDeleteSurveyResponse(filter: $filter) {
      id
      userId
      questionId
      response
      createdAt
      updatedAt
    }
  }
`;
