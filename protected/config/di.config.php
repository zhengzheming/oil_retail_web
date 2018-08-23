<?php
/**
 * Created by youyi000.
 * DateTime: 2018/4/8 15:08
 * Describe：
 *  依赖注入的配置项，主要是接口到实际类的配置，支持两种方式，一是key=>value，key为别名，value为实际的类名，二是直接数组配置
 */

return [
    ['class'=>'inc','definition'=>'ddd\infrastructure\Utility','params'=>[],'singleton'=>1],
    ['class'=> 'ddd\Contract\Domain\Model\Project\IProjectRepository', 'definition'=> 'ddd\Contract\Repository\Project\ProjectRepository', 'params'=>[], 'singleton'=>1],
	['class'=> 'ddd\domain\iRepository\project\IProjectRepository', 'definition'=> 'ddd\repository\project\ProjectRepository', 'params'=>[], 'singleton'=>1],
    ['class'=> 'ddd\domain\iRepository\contract\IContractRepository', 'definition'=> 'ddd\repository\contract\ContractRepository', 'params'=>[], 'singleton'=>1],
    ['class'=> 'ddd\domain\iRepository\contract\ITradeGoodsRepository', 'definition'=> 'ddd\repository\contract\TradeGoodsRepository', 'params'=>[], 'singleton'=>1],
    ['class'=>'ddd\domain\iRepository\stock\IStockRepository','definition'=>'ddd\repository\stock\StockRepository','params'=>[],'singleton'=>1],
    ['class' => 'ddd\domain\iRepository\receipt\IReceiptClaimRepository', 'definition' =>'ddd\repository\receipt\ReceiptClaimRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\domain\iRepository\payment\IPayConfirmRepository', 'definition' =>'ddd\repository\payment\PayConfirmRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\domain\iRepository\payment\IPayClaimRepository', 'definition' =>'ddd\repository\payment\PayClaimRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\domain\iRepository\stock\IStockInRepository', 'definition' =>'ddd\repository\stock\StockInRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\domain\iRepository\stock\IStockOutRepository', 'definition' =>'ddd\repository\stock\StockOutRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\domain\iRepository\contractSettlement\ILadingBillSettlementRepository', 'definition' =>'ddd\repository\contractSettlement\LadingBillSettlementRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\domain\iRepository\contractSettlement\IDeliveryOrderSettlementRepository', 'definition' =>'ddd\repository\contractSettlement\DeliveryOrderSettlementRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\domain\iRepository\contractSettlement\IBuyContractSettlementRepository', 'definition' =>'ddd\repository\contractSettlement\BuyContractSettlementRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\domain\iRepository\contractSettlement\ISaleContractSettlementRepository', 'definition' =>'ddd\repository\contractSettlement\SaleContractSettlementRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\domain\iRepository\stock\ILadingBillRepository', 'definition' =>'ddd\repository\stock\LadingBillRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\domain\iRepository\stock\IDeliveryOrderRepository', 'definition' =>'ddd\repository\stock\DeliveryOrderRepository', 'params' =>[], 'singleton' =>1],
    ['class'=> 'ddd\domain\iRepository\IPartnerRepository', 'definition'=> 'ddd\repository\PartnerRepository', 'params'=>[], 'singleton'=>1],
    ['class' => 'ddd\domain\iRepository\risk\IPartnerContractAmountRepository', 'definition' =>'ddd\repository\risk\PartnerContractAmountRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\domain\iRepository\risk\IPartnerUsedAmountRepository', 'definition' =>'ddd\repository\risk\PartnerUsedAmountRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Split\Domain\Model\ContractSplit\IContractSplitApplyRepository', 'definition' => 'ddd\Split\Repository\ContractSplit\ContractSplitApplyRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Split\Domain\Model\ContractSplit\IContractSplitRepository', 'definition' => 'ddd\Split\Repository\ContractSplit\ContractSplitRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Split\Domain\Model\ContractSplit\IStockSplitDetailRepository', 'definition' => 'ddd\Split\Repository\ContractSplit\StockSplitDetailRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Split\Domain\Model\Contract\IContractTerminateRepository', 'definition' => 'ddd\Split\Repository\Contract\ContractTerminateRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Split\Domain\Model\Contract\IContractRepository', 'definition' => 'ddd\Split\Repository\Contract\ContractRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Split\Domain\Model\ContractSplit\IContractStockSplitRepository', 'definition' => 'ddd\Split\Repository\ContractSplit\StockSplitRepository', 'params' =>[], 'singleton' =>1],

    //'inc'=>'ddd\infrastructure\Utility',
    ['class' => 'ddd\domain\iRepository\stock\IDistributionOrderRepository', 'definition' =>'ddd\repository\stock\DistributionOrderRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\domain\iRepository\stock\IStockOutRepository', 'definition' =>'ddd\repository\stock\StockOutRepository', 'params' =>[], 'singleton' =>1],
    //
    ['class' => 'ddd\Split\Domain\Model\ICheckLog', 'definition' => 'ddd\Split\Repository\CheckLog', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Split\Domain\Model\IGoods', 'definition' => 'ddd\Split\Repository\Goods', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Split\Domain\Model\Stock\IStockInRepository', 'definition' =>'ddd\Split\Repository\Stock\StockInRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Split\Domain\Model\Stock\IStockOutRepository', 'definition' =>'ddd\Split\Repository\Stock\StockOutRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Split\Domain\Model\StockSplit\IStockSplitApplyRepository', 'definition' =>'ddd\Split\Repository\StockSplit\StockSplitApplyRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Split\Domain\Model\StockSplit\IStockSplitApplyDetailRepository', 'definition' =>'ddd\Split\Repository\StockSplit\StockSplitApplyDetailRepository', 'params' =>[], 'singleton' =>1],
    //利润报表
    ['class' => 'ddd\Profit\Domain\Model\Stock\IDeliveryOrderRepository', 'definition' =>'ddd\Profit\Repository\Stock\DeliveryOrderRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Profit\Domain\Model\Profit\IDeliveryOrderProfitRepository', 'definition' =>'ddd\Profit\Repository\Profit\DeliveryOrderProfitRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Profit\Domain\Model\Profit\ISellContractProfitRepository', 'definition' =>'ddd\Profit\Repository\Profit\SellContractProfitRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Profit\Domain\Model\Profit\IProjectProfitRepository', 'definition' =>'ddd\Profit\Repository\Profit\ProjectProfitRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Profit\Domain\Model\Profit\ICorporationProfitRepository', 'definition' =>'ddd\Profit\Repository\Profit\CorporationProfitRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Profit\Domain\Model\Stock\IDeliveryOrderDetailRepository', 'definition' =>'ddd\Profit\Repository\Stock\DeliveryOrderDetailRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Profit\Domain\Model\Stock\IBuyGoodsCostRepository', 'definition' =>'ddd\Profit\Repository\Stock\BuyGoodsCostRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Profit\Domain\Model\Stock\IStockNoticeCostRepository', 'definition' =>'ddd\Profit\Repository\Stock\StockNoticeCostRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Profit\Domain\Model\Stock\IStockNoticeRepository', 'definition' =>'ddd\Profit\Repository\Stock\StockNoticeRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Profit\Domain\Model\Payment\IReceiveConfirmRepository', 'definition' =>'ddd\Profit\Repository\Payment\ReceiveConfirmRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Profit\Domain\Contract\IContractRepository', 'definition' =>'ddd\Profit\Repository\Contract\ContractRepository', 'params' =>[], 'singleton' =>1],
 	['class' => 'ddd\Profit\Domain\Model\Invoice\IInvoiceApplicationRepository', 'definition' =>'ddd\Profit\Repository\Invoice\InvoiceApplicationRepository', 'params' =>[], 'singleton' =>1],
    ['class' => 'ddd\Profit\Domain\Model\Invoice\IInvoiceRepository', 'definition' => 'ddd\Profit\Repository\Invoice\InvoiceRepositoryRepository', 'params' =>[], 'singleton' =>1],
];