/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createIssueInfo = /* GraphQL */ `
  mutation CreateIssueInfo(
    $input: CreateIssueInfoInput!
    $condition: ModelIssueInfoConditionInput
  ) {
    createIssueInfo(input: $input, condition: $condition) {
      id
      issueId
      issueTitle
      createdAt
      updatedAt
    }
  }
`;
export const updateIssueInfo = /* GraphQL */ `
  mutation UpdateIssueInfo(
    $input: UpdateIssueInfoInput!
    $condition: ModelIssueInfoConditionInput
  ) {
    updateIssueInfo(input: $input, condition: $condition) {
      id
      issueId
      issueTitle
      createdAt
      updatedAt
    }
  }
`;
export const deleteIssueInfo = /* GraphQL */ `
  mutation DeleteIssueInfo(
    $input: DeleteIssueInfoInput!
    $condition: ModelIssueInfoConditionInput
  ) {
    deleteIssueInfo(input: $input, condition: $condition) {
      id
      issueId
      issueTitle
      createdAt
      updatedAt
    }
  }
`;
export const createQuestionBank = /* GraphQL */ `
  mutation CreateQuestionBank(
    $input: CreateQuestionBankInput!
    $condition: ModelQuestionBankConditionInput
  ) {
    createQuestionBank(input: $input, condition: $condition) {
      id
      issueId
      questionId
      questionStr
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestionBank = /* GraphQL */ `
  mutation UpdateQuestionBank(
    $input: UpdateQuestionBankInput!
    $condition: ModelQuestionBankConditionInput
  ) {
    updateQuestionBank(input: $input, condition: $condition) {
      id
      issueId
      questionId
      questionStr
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestionBank = /* GraphQL */ `
  mutation DeleteQuestionBank(
    $input: DeleteQuestionBankInput!
    $condition: ModelQuestionBankConditionInput
  ) {
    deleteQuestionBank(input: $input, condition: $condition) {
      id
      issueId
      questionId
      questionStr
      createdAt
      updatedAt
    }
  }
`;
export const createSurveyResponse = /* GraphQL */ `
  mutation CreateSurveyResponse(
    $input: CreateSurveyResponseInput!
    $condition: ModelSurveyResponseConditionInput
  ) {
    createSurveyResponse(input: $input, condition: $condition) {
      id
      userId
      questionId
      response
      createdAt
      updatedAt
    }
  }
`;
export const updateSurveyResponse = /* GraphQL */ `
  mutation UpdateSurveyResponse(
    $input: UpdateSurveyResponseInput!
    $condition: ModelSurveyResponseConditionInput
  ) {
    updateSurveyResponse(input: $input, condition: $condition) {
      id
      userId
      questionId
      response
      createdAt
      updatedAt
    }
  }
`;
export const deleteSurveyResponse = /* GraphQL */ `
  mutation DeleteSurveyResponse(
    $input: DeleteSurveyResponseInput!
    $condition: ModelSurveyResponseConditionInput
  ) {
    deleteSurveyResponse(input: $input, condition: $condition) {
      id
      userId
      questionId
      response
      createdAt
      updatedAt
    }
  }
`;
