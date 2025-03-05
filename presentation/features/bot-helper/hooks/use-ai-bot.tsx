import { AIHelperRepository } from "@/data/repository/ai-repository";
import { useMutation } from "@tanstack/react-query";

export const useAIHelper = () => {
  return useMutation({
    mutationFn: ({ base64, message }: { base64: string; message: string }) =>
      AIHelperRepository.sendImageAndMessage(base64, message),
  });
};
