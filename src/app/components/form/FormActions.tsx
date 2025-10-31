'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

interface FormActionsProps {
  isSubmitting: boolean;
  onCancel: () => void;
}

const FormActions: React.FC<FormActionsProps> = ({ isSubmitting, onCancel }) => {
  const t = useTranslations('Form.Actions');

  return (
    <div className="flex justify-end space-x-4 pt-4">
      <button
        type="button"
        onClick={onCancel}
        className="px-6 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50"
      >
        {t('cancel')}
      </button>
      <button
        type="submit"
        className="px-6 py-2 border border-transparent rounded-md text-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400"
        disabled={isSubmitting}
      >
        {isSubmitting ? t('saving') : t('submit')}
      </button>
    </div>
  );
};

export default FormActions;
