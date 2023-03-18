/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIssueInfo = /* GraphQL */ `
  query GetIssueInfo($id: ID!) {
    getIssueInfo(id: $id) {
      id
      issueId
      issueTitle
      createdAt
      updatedAt
    }
  }
`;
export const listIssueInfos = /* GraphQL */ `
  query ListIssueInfos(
    $filter: ModelIssueInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIssueInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        issueId
        issueTitle
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestionBank = /* GraphQL */ `
  query GetQuestionBank($id: ID!) {
    getQuestionBank(id: $id) {
      id
      issueId
      questionId
      questionStr
      createdAt
      updatedAt
    }
  }
`;
export const listQuestionBanks = /* GraphQL */ `
  query ListQuestionBanks(
    $filter: ModelQuestionBankFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionBanks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        issueId
        questionId
        questionStr
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSurveyResponse = /* GraphQL */ `
  query GetSurveyResponse($id: ID!) {
    getSurveyResponse(id: $id) {
      id
      userId
      questionId
      response
      createdAt
      updatedAt
    }
  }
`;
export const listSurveyResponses = /* GraphQL */ `
  query ListSurveyResponses(
    $filter: ModelSurveyResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveyResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        questionId
        response
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
