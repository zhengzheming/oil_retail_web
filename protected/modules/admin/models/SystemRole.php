<?php

/**
 * This is the model class for table "{{system_role}}".
 *
 * The followings are the available columns in table '{{system_role}}':
 * @property integer $role_id
 * @property string $role_name
 * @property string $right_codes
 * @property integer $order_index
 * @property integer $type
 * @property integer $status
 * @property string $remark
 * @property integer $create_user_id
 * @property string $create_time
 * @property integer $update_user_id
 * @property string $update_time
 */
class SystemRole extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return '{{system_role}}';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('order_index, type, status, create_user_id, update_user_id', 'numerical', 'integerOnly'=>true),
			array('role_name', 'length', 'max'=>1024),
			array('remark', 'length', 'max'=>256),
			array('right_codes, create_time, update_time', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('role_id, role_name, right_codes, order_index, type, status, remark, create_user_id, create_time, update_user_id, update_time', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'role_id' => 'Role',
			'role_name' => 'Role Name',
			'right_codes' => 'Right Codes',
			'order_index' => 'Order Index',
			'type' => 'Type',
			'status' => 'Status',
			'remark' => 'Remark',
			'create_user_id' => 'Create User',
			'create_time' => 'Create Time',
			'update_user_id' => 'Update User',
			'update_time' => 'Update Time',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 *
	 * Typical usecase:
	 * - Initialize the model fields with values from filter form.
	 * - Execute this method to get CActiveDataProvider instance which will filter
	 * models according to data in model fields.
	 * - Pass data provider to CGridView, CListView or any similar widget.
	 *
	 * @return CActiveDataProvider the data provider that can return the models
	 * based on the search/filter conditions.
	 */
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('role_id',$this->role_id);
		$criteria->compare('role_name',$this->role_name,true);
		$criteria->compare('right_codes',$this->right_codes,true);
		$criteria->compare('order_index',$this->order_index);
		$criteria->compare('type',$this->type);
		$criteria->compare('status',$this->status);
		$criteria->compare('remark',$this->remark,true);
		$criteria->compare('create_user_id',$this->create_user_id);
		$criteria->compare('create_time',$this->create_time,true);
		$criteria->compare('update_user_id',$this->update_user_id);
		$criteria->compare('update_time',$this->update_time,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return SystemRole the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
