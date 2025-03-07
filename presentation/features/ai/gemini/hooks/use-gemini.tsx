import { ImageAnalysis } from "@/data/models/ai/image-analysis";
import { AIHelperRepository } from "@/data/repository/ai-repository";
import { useMutation } from "@tanstack/react-query";

export const useGemini = () => {
  return useMutation<ImageAnalysis, Error, { base64: string }>({
    mutationFn: ({ base64 }) => AIHelperRepository.dataAnalysisGemini(base64),
  });
};
