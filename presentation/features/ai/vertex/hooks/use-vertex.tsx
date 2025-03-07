import { useMutation } from "@tanstack/react-query";
import { AIHelperRepository } from "@/data/repository/ai-repository";
import { ImageAnalysis } from "@/data/models/ai/image-analysis";

export const useVertex = () => {
  return useMutation<ImageAnalysis, Error, { base64: string }>({
    mutationFn: ({ base64 }) => AIHelperRepository.dataAnalysisVertex(base64),
  });
};
