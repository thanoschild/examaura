// utils/fetchQuestions.ts
import { associateCloudQuestions } from "../questions/associateCloud";
import { dataEngineerQuestions } from "../questions/dataEnginer";
import { cloudArchitectQuestions } from "../questions/cloudArchitect";

export function fetchQuestionsByTopic(topic: string) {
  switch (topic.toLowerCase()) {
    case 'associate-cloud-engineer':
      return associateCloudQuestions;
    case 'professional-data-engineer':
      return dataEngineerQuestions;
    case 'professional-cloud-architect':
      return cloudArchitectQuestions;
    default:
      return [];
  }
}
